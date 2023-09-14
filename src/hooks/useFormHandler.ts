import { useCallback, useEffect, useState } from 'react';

import { Validator } from 'validation/Validator';

export const useFormHandler = <T>(initialFields: T, constraints: Record<string, any>) => {
  const [fields, setFields] = useState<T>(initialFields);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    setFields(initialFields);
  }, [initialFields]);

  useEffect(() => {
    const hasChanged =
      !!fields &&
      Object.keys(fields).reduce((prev, key) => {
        return prev || fields[key as keyof T] !== initialFields[key as keyof T];
      }, false);

    setHasUnsavedChanges(hasChanged);
  }, [fields, initialFields]);

  const updateFields = useCallback((value: string | boolean | number, key: string) => {
    setErrors((errors) => ({ ...errors, [key]: '' }));
    setFields((fields) => ({ ...fields, [key]: value }));
  }, []);

  const validateFields = useCallback(
    (key: string) => {
      Validator.validateFields({ [key]: fields[key as keyof T] }, constraints).catch((error) => {
        setErrors((errors) => ({ ...errors, [key]: error }));
      });
    },
    [fields, constraints]
  );

  const discardChanges = useCallback(() => {
    setFields(initialFields);
    setErrors({});
  }, [initialFields]);

  return { fields, updateFields, hasUnsavedChanges, discardChanges, errors, validateFields };
};
