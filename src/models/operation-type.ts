import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Possible operators are sum, subtract, multiply, divide */
export const OperationType = {
  Sum: "SUM",
  Subtract: "SUBTRACT",
  Multiply: "MULTIPLY",
  Divide: "DIVIDE",
} as const;
export type OperationType = (typeof OperationType)[keyof typeof OperationType] | (string & {});

export const operationTypeSchema: EnumSchema<OperationType> = s.enumOf<OperationType>(OperationType);
