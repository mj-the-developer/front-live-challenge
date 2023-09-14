import { Collapsible, Icon, LegacyStack, Text, Button, Badge, ButtonGroup } from '@shopify/polaris';
import { CircleTickMajor } from '@shopify/polaris-icons';
import { useTranslation } from 'react-multi-lang';
import clsx from 'clsx';
import parse from 'html-react-parser';

import { EmptyCheck } from '@/shared/icons/EmptyCheck';
import { WizardStep, WizardStepProps } from './WizardStepProps';

type Props = WizardStepProps & {
  isSelectedStep: boolean;
  passStep: (step: WizardStep, isPassed: boolean) => void;
  updateSelectedStep: (step: WizardStep) => void;
  isOnModal?: boolean;
};

export const WizardStepComponent = ({
  primaryAction,
  additionalContent = null,
  id,
  illustration,
  isNew,
  isPassed,
  isSelectedStep,
  passStep,
  preventPassingStepOnAction,
  secondaryAction,
  subtitle,
  title,
  updateSelectedStep,
  isOnModal,
}: Props) => {
  const t = useTranslation();

  return (
    <div className={clsx('wizard-step', !isOnModal && 'is-outside-modal')}>
      <div className="wizard-step-header" onClick={() => updateSelectedStep(id)}>
        <LegacyStack spacing="tight">
          {isPassed ? <Icon source={CircleTickMajor} color="primary" /> : <EmptyCheck />}
          <Text as="span" fontWeight={isSelectedStep ? 'semibold' : 'regular'} variant="bodyMd">
            {title}
          </Text>
          {isNew && <Badge>{t('badges.new')}</Badge>}
        </LegacyStack>
      </div>

      <Collapsible
        open={isSelectedStep}
        id={`${title}-wizard-collapsible`}
        transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
      >
        <div className="wizard-step-content">
          <img src={illustration} alt="Step Illustration" className="wizard-step-illustration" />

          <div style={{ marginBottom: 10 }}>
            {subtitle.map((content) => (
              <Text key={content} as="p" variant="bodyMd" color="subdued">
                {parse(content)}
              </Text>
            ))}
          </div>

          {additionalContent}

          <ButtonGroup>
            <Button
              url={primaryAction.url}
              onClick={() => {
                if (!!primaryAction.onAction) primaryAction.onAction();
                if (!preventPassingStepOnAction) passStep(id, isPassed);
              }}
              loading={!!primaryAction.loading}
              primary
            >
              {primaryAction.content}
            </Button>

            {!!secondaryAction && (
              <Button
                url={secondaryAction.url}
                onClick={() => {
                  if (!!secondaryAction.onAction) secondaryAction.onAction();
                  if (!preventPassingStepOnAction) passStep(id, isPassed);
                }}
                loading={!!secondaryAction.loading}
              >
                {secondaryAction.content}
              </Button>
            )}
          </ButtonGroup>
        </div>
      </Collapsible>
    </div>
  );
};
