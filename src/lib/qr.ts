export interface QrModule {
  x: number;
  y: number;
  accent: boolean;
}

/**
 * Pure port of drawQr() from 99-scripts.html.
 * Uses a seeded LCG (seed 8214421) so output is fully deterministic.
 * Called from the server component QrMatrix.tsx — no browser APIs used.
 */
export function buildQrModules(size: number = 12): QrModule[] {
  const N = 25;
  const dark: number[][] = [];
  for (let y = 0; y < N; y++) {
    dark.push(new Array(N).fill(0));
  }

  function finder(ox: number, oy: number) {
    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 7; x++) {
        const edge = x === 0 || x === 6 || y === 0 || y === 6;
        const core = x >= 2 && x <= 4 && y >= 2 && y <= 4;
        dark[oy + y][ox + x] = edge || core ? 1 : 0;
      }
    }
  }

  function reserved(x: number, y: number): boolean {
    if (x < 8 && y < 8) return true;
    if (x > N - 9 && y < 8) return true;
    if (x < 8 && y > N - 9) return true;
    if (x === 6 || y === 6) return true;
    return false;
  }

  let seed = 8214421;
  function rnd(): number {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  }

  // Fill non-reserved modules with seeded random
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (!reserved(x, y)) {
        dark[y][x] = rnd() > 0.48 ? 1 : 0;
      }
    }
  }

  // Timing patterns (column 6 and row 6)
  for (let i = 6; i < N - 6; i++) {
    dark[6][i] = i % 2 === 0 ? 1 : 0;
    dark[i][6] = i % 2 === 0 ? 1 : 0;
  }

  // Finder patterns (overwrites timing at corners)
  finder(0, 0);
  finder(N - 7, 0);
  finder(0, N - 7);

  // Second RNG pass for accent colouring (must follow same sequence as source)
  const modules: QrModule[] = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (!dark[y][x]) continue;
      const accent = !reserved(x, y) && rnd() > 0.9;
      modules.push({ x: x * size, y: y * size, accent });
    }
  }

  return modules;
}
