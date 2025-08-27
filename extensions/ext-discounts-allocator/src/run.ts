import type {
  RunInput,
  FunctionRunResult
} from "../generated/api";

const EMPTY_RESULT: FunctionRunResult = {
  displayableErrors: [],
  lineDiscounts: [],
};

export function run(input: RunInput): FunctionRunResult {
  return EMPTY_RESULT
}