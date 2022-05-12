import { MATH_OPERATIONS } from "./mathOperations"
import { RELATIONAL_OPERATIONS } from "./relationalOperations"
import { BOOL_OPERATIONS } from "./boolOperations"

export const SPECIAL_SYMBOLS = {
  ...MATH_OPERATIONS,
  ...RELATIONAL_OPERATIONS,
  ...BOOL_OPERATIONS,
}
