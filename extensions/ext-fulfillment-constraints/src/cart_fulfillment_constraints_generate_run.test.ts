import { describe, it, expect } from 'vitest';
import { cartFulfillmentConstraintsGenerateRun } from './cart_fulfillment_constraints_generate_run';
import { CartFulfillmentConstraintsGenerateRunResult } from '../generated/api';

describe('fulfillment constraint rule function', () => {
  it('returns no operations without configuration', () => {
    const result = cartFulfillmentConstraintsGenerateRun({
      cart: {
        deliverableLines: [
          {
            id: "gid://shopify/DeliverableCartLine/1"
          },
          {
            id: "gid://shopify/DeliverableCartLine/2"
          }
        ]
      },
      fulfillmentConstraintRule: {
        metafield: null
      }
    });
    const expected: CartFulfillmentConstraintsGenerateRunResult = { operations: [] };

    expect(result).toEqual(expected);
  });
});