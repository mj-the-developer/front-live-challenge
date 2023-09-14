import { Modal } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

import { ModalProps } from 'types/UiTypes';

type Props = ModalProps & {
  onConfirm: () => void;
};

export const LeavePageModal = ({ isOpen, onClose, onConfirm }: Props) => {
  const t = useTranslation();

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title={t('leave_page_modal.title')}
      primaryAction={{
        content: t('leave_page_modal.primary_action'),
        onAction: onConfirm,
        destructive: true,
      }}
      secondaryActions={[
        {
          content: t('leave_page_modal.secondary_action'),
          onAction: onClose,
        },
      ]}
    >
      <Modal.Section>
        <p>{t('leave_page_modal.content')}</p>
      </Modal.Section>
    </Modal>
  );
};
