import { describe, it, expect } from 'vitest';
import { cartPaymentMethodsTransformRun } from './cart_payment_methods_transform_run';
import { CartPaymentMethodsTransformRunResult } from '../generated/api';

describe('payment customization function', () => {
  it('returns no operations without configuration', () => {
    const result = cartPaymentMethodsTransformRun({
      paymentCustomization: {
        metafield: null
      }
    });
    const expected: CartPaymentMethodsTransformRunResult = { operations: [] };

    expect(result).toEqual(expected);
  });
});