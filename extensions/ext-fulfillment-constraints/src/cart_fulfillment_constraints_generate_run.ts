import type {
  CartFulfillmentConstraintsGenerateRunInput,
  CartFulfillmentConstraintsGenerateRunResult,
} from "../generated/api";

const NO_CHANGES: CartFulfillmentConstraintsGenerateRunResult = {
  operations: [],
};

type Configuration = {};

export function cartFulfillmentConstraintsGenerateRun(input: CartFulfillmentConstraintsGenerateRunInput): CartFulfillmentConstraintsGenerateRunResult {
    const configuration: Configuration = input?.fulfillmentConstraintRule?.metafield?.jsonValue ?? {};
  return NO_CHANGES;
};