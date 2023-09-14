import { Layout } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

import { Wizard } from '@/shared/wizard/Wizard';
import { useOnboardingSteps } from './useOnboardingSteps';

type Props = {
  isOnModal?: boolean;
  onCloseModal?: () => void;
};

export const Onboarding = ({ isOnModal = false, onCloseModal = () => {} }: Props) => {
  const onboardingSteps = useOnboardingSteps();
  const t = useTranslation();

  const hasCompletedOnboarding = false;

  if (hasCompletedOnboarding) return null;

  return (
    <Layout.Section fullWidth>
      <Wizard
        initialShowSteps={true}
        isOnModal={isOnModal}
        loading={false}
        onCloseModal={onCloseModal}
        steps={onboardingSteps}
        subtitle={t('onboarding.subtitle', { store: 'Sample store name' })}
        title={t('onboarding.title')}
        //   uiConfigKeyToDismiss="has_completed_onboarding"
        uiConfigWizardKey="onboarding"
      />
    </Layout.Section>
  );
};
