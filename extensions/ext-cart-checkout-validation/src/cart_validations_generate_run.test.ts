import { describe, it, expect } from 'vitest';
import { cartValidationsGenerateRun } from './cart_validations_generate_run';
import { CartValidationsGenerateRunResult } from "../generated/api";

describe('cart checkout validation function', () => {
  it('returns an error when quantity exceeds one', () => {
    const result = cartValidationsGenerateRun({
      cart: {
        lines: [
          {
            quantity: 3
          }
        ]
      }
    });
    const expected: CartValidationsGenerateRunResult = {
      operations: [
        {
          validationAdd: {
            errors: [
              {
                message: "Not possible to order more than one of each",
                target: "$.cart"
              }
            ]
          }
        }
      ]
    };

    expect(result).toEqual(expected);
  });

  it('returns no errors when quantity is one', () => {
    const result = cartValidationsGenerateRun({
      cart: {
        lines: [
          {
            quantity: 1
          }
        ]
      }
    });
    const expected: CartValidationsGenerateRunResult = {
      operations: [
        {
          validationAdd: {
            errors: []
          }
        }
      ]
    };

    expect(result).toEqual(expected);
  });
});