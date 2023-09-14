import { ContextualSaveBar } from '@shopify/polaris';
import { Prompt } from 'react-router-dom';
import { useTranslation } from 'react-multi-lang';

type Props = {
  handleDiscard: () => void;
  handleSave: () => void;
  fullWidth?: boolean;
  loading?: boolean;
  message?: string | null;
};

export const UnsavedChangesBar = ({
  handleDiscard,
  handleSave,
  fullWidth = false,
  loading = false,
  message = null,
}: Props) => {
  const t = useTranslation();

  return (
    <>
      <Prompt when={true} message="" />
      <ContextualSaveBar
        fullWidth={fullWidth}
        message={!!message ? message : t('unsaved_changes_bar.default_message')}
        discardAction={{
          onAction: handleDiscard,
          content: t('unsaved_changes_bar.discard'),
        }}
        saveAction={{
          onAction: handleSave,
          loading,
          content: t('unsaved_changes_bar.save'),
        }}
      />
    </>
  );
};
