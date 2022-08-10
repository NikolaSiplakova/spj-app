export const STATEMENT_TYPES = {
  ASSIGN: "assign-statement",
  DO: "do-statement",
  FOR: "for-statement",
  IF: "if-statement",
  REPEAT: "repeat-statement",
  SKIP: "skip-statement",
  THEN_ELSE: "then-else-statement",
  WHILE: "while-statement",
}

export const HIGHLIGH_STATEMENT_TYPES = {
  [STATEMENT_TYPES.ASSIGN]: "assign",
  [STATEMENT_TYPES.DO]: "do / repeat",
  [STATEMENT_TYPES.FOR]: "for",
  [STATEMENT_TYPES.IF]: "if",
  [STATEMENT_TYPES.REPEAT]: "repeat",
  [STATEMENT_TYPES.SKIP]: "skip",
  [STATEMENT_TYPES.THEN_ELSE]: "then / else",
  [STATEMENT_TYPES.WHILE]: "while",
}
