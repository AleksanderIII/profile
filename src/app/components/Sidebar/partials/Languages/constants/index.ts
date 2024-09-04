export enum Levels {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
}

export function levelToStars(level: Levels) {
  switch (level) {
    case Levels.A1:
      return 1;
    case Levels.A2:
      return 2;
    case Levels.B1:
      return 3;
    case Levels.B2:
      return 4;
    case Levels.C1:
      return 5;
    case Levels.C2:
      return 5;
    default:
      return 0;
  }
}
