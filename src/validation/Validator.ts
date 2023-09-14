import { validate } from 'validate.js';

export class Validator {
  public static validateFields(fields: Record<string, any>, constraints: Record<string, any>) {
    return new Promise((resolve, reject) => {
      const { isValidated, error } = Validator.isValidated(fields, constraints);

      if (isValidated) {
        resolve(isValidated);
      } else {
        reject(error);
      }
    });
  }

  private static isValidated(fields: Record<string, any>, constraints: Record<string, any>) {
    let firstValidationError: string | undefined;

    const isValidated = Object.entries(fields).reduce((prev, [key, value]) => {
      const { passed, error } = Validator.validateField(key, value, constraints);
      if (error && !firstValidationError) firstValidationError = error;

      return passed && prev;
    }, true);

    return { isValidated, error: firstValidationError };
  }

  private static validateField(key: string, value: any, constraints: Record<string, any>) {
    const errors = validate({ [key]: value }, { [key]: constraints[key] });

    return {
      passed: !errors,
      error: errors?.[key][0],
    };
  }
}
