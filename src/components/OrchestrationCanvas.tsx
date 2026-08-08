'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FLOWS } from '@/lib/data/flows';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

interface NodeState {
  index: number;
  isAI: boolean;
  text: string;
  detail: string;
  visible: boolean;
}

interface JoinState {
  index: number;
  visible: boolean;
}

export function OrchestrationCanvas() {
  const [activeFlow, setActiveFlow] = useState(0);
  const [nodes, setNodes] = useState<NodeState[]>([]);
  const [joins, setJoins] = useState<JoinState[]>([]);
  const [outputVisible, setOutputVisible] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const orchRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  function runFlow(idx: number) {
    clearTimers();
    setNodes([]);
    setJoins([]);
    setOutputVisible(false);

    const f = FLOWS[idx];

    f.steps.forEach((step, i) => {
      const delay = reduced ? 0 : i * 520;
      timers.current.push(
        setTimeout(() => {
          setNodes(prev => [
            ...prev,
            { index: i, isAI: step.isAI, text: step.text, detail: step.detail, visible: true },
          ]);
          if (i > 0) {
            setJoins(prev => [...prev, { index: i, visible: true }]);
          }
        }, delay)
      );
    });

    const outDelay = reduced ? 0 : f.steps.length * 520 + 180;
    timers.current.push(setTimeout(() => setOutputVisible(true), outDelay));
  }

  useEffect(() => {
    const el = orchRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      runFlow(0);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runFlow(0);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => clearTimers();
  }, []);

  function handleFlowChange(idx: number) {
    setActiveFlow(idx);
    runFlow(idx);
  }

  const f = FLOWS[activeFlow];

  return (
    <div className="orch rv" id="orch" ref={orchRef}>
      <div className="orch__top">
        <span className="tag tag--ai">Copilot</span>
        <span className="tiny" style={{ color: 'var(--on-dark-3)' }}>Choose an instruction</span>
        <div className="row" style={{ gap: 'var(--s2)', marginLeft: 'auto' }}>
          {FLOWS.map((flow, i) => (
            <button
              key={i}
              type="button"
              className={`chip${activeFlow === i ? ' is-on' : ''}`}
              aria-pressed={activeFlow === i}
              onClick={() => handleFlowChange(i)}
            >
              {flow.label}
            </button>
          ))}
        </div>
      </div>

      <div className="orch__body" id="orchBody">
        {f.steps.map((step, i) => {
          const nodeVisible = nodes.some(n => n.index === i && n.visible);
          const joinVisible = joins.some(j => j.index === i && j.visible);
          return (
            <React.Fragment key={i}>
              {i > 0 && <div className={`ojoin${joinVisible ? ' in' : ''}`} />}
              <div className={`onode${step.isAI ? ' is-ai' : ''}${nodeVisible ? ' in' : ''}`}>
                <span className="onode__i">{step.isAI ? 'AI' : `0${i + 1}`}</span>
                <span>
                  <span className="onode__t">{step.text}</span>
                  <span className="onode__d">{step.detail}</span>
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className={`orch__out${outputVisible ? ' in' : ''}`} id="orchOut" aria-live="polite">
        {f.outputs.map((output, i) => (
          <div key={i} className="stat">
            <span className="stat__n">{output.value}</span>
            <span className="stat__l">{output.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
