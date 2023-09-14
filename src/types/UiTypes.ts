export interface FormHandler<T> {
  fields: T;
  errors: Partial<Record<keyof T, string>>;
  updateFields: (value: string | boolean | number, key: string) => void;
  validateFields: (key: string) => void;
}

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
