import { Toast } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

type Props = {
  actionContent?: string;
  actionHandler?: () => void;
  duration?: number;
  error?: boolean;
  message: string;
  onDismiss: () => void;
};

export const ToastMessage = ({
  message,
  onDismiss,
  actionContent = '',
  actionHandler = () => {},
  duration = 5000,
  error = false,
}: Props) => {
  const t = useTranslation();

  const toastAction = !!actionContent ? { content: actionContent, onAction: actionHandler } : undefined;

  return (
    <Toast
      content={t(message)}
      duration={!!actionContent ? 10000 : duration}
      error={error}
      onDismiss={onDismiss}
      action={toastAction}
    />
  );
};
