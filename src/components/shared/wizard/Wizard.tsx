import { LegacyCard, Collapsible } from '@shopify/polaris';
import { useState } from 'react';

import { WizardHeader } from './WizardHeader';
import { WizardStepComponent } from './WizardStepComponent';
import { WizardStep, WizardStepProps } from './WizardStepProps';
import { useToggle } from 'hooks/useToggle';

type Props = {
  initialShowSteps: boolean;
  isOnModal?: boolean;
  loading: boolean;
  onCloseModal?: () => void;
  steps: WizardStepProps[];
  subtitle: string;
  title: string;
  //   uiConfigKeyToDismiss: UiConfigKeys;
  uiConfigWizardKey: 'success_journey' | 'onboarding';
};

export const Wizard = ({
  initialShowSteps,
  isOnModal,
  loading,
  onCloseModal = () => {},
  steps,
  title,
  subtitle,
  //   uiConfigKeyToDismiss,
  uiConfigWizardKey,
}: Props) => {
  //   const uiConfigs = useUiConfigs();
  //   const updateShopInfo = useUpdateShopInfo();

  //   const { dismissBanner: dismissWizard } = useDismissBanner(uiConfigKeyToDismiss);

  const [selectedStep, setSelectedStep] = useState<WizardStep>(steps[0].id);
  const [showSteps, toggleShowSteps] = useToggle(initialShowSteps);

  const updateSelectedStep = (step: WizardStep) => setSelectedStep(step);

  //   useEffect(() => {
  //     if (!loading) {
  //       setSelectedStep(steps.find((step) => !step.isPassed)?.id ?? steps[0].id);
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [loading]);

  //   useEffect(() => {
  //     return () => {
  //       if (steps.every((step) => !!step.isPassed)) dismissWizard();
  //     };
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [steps]);

  //   const passStep = (step: WizardStep, isPassed: boolean) => {
  //     onCloseModal();

  //     if (!isPassed) {
  //       const data = {
  //         ui_config: { ...uiConfigs, [uiConfigWizardKey]: { ...(uiConfigs?.[uiConfigWizardKey] ?? {}), [step]: true } },
  //       };

  //       api
  //         .updateShopInfo(data)
  //         .then((resp) => updateShopInfo(data))
  //         .catch((err) => {});
  //     }
  //   };

  const passedStepsCount = steps.filter((step) => !!step.isPassed).length;

  return (
    <LegacyCard>
      <div>
        <WizardHeader
          title={title}
          subtitle={subtitle}
          isOnModal={isOnModal}
          showSteps={showSteps}
          toggleShowSteps={toggleShowSteps}
          allStepsCount={steps.length}
          passedStepsCount={passedStepsCount}
        />

        <Collapsible
          open={showSteps}
          id={`wizard-${uiConfigWizardKey}-collapsible`}
          transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
        >
          <div style={{ borderTop: '1px solid #e1e3e5', padding: '20px 0' }}>
            {steps.map((step) => (
              <WizardStepComponent
                key={step.id}
                isSelectedStep={selectedStep === step.id}
                updateSelectedStep={updateSelectedStep}
                passStep={() => {}}
                isOnModal={isOnModal}
                {...step}
              />
            ))}
          </div>
        </Collapsible>
      </div>
    </LegacyCard>
  );
};
