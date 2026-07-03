export const EASINGS = {
  // Expo Out — Main camera movements, section reveals
  apex: [0.16, 1, 0.3, 1],

  // Cubic In Out — Card movements, panel transitions
  sector: [0.65, 0, 0.35, 1],

  // Back Out — Micro-interactions, button hovers
  drs: [0.34, 1.56, 0.64, 1],

  // Linear — Continuous parallax elements
  slipstream: [0, 0, 1, 1],

  // Sine In — Exit animations only
  braking: [0.12, 0, 0.39, 0],

  // Expo In Out — Page-scale transitions
  championship: [0.87, 0, 0.13, 1],
} as const;
