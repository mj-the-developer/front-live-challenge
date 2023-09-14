import { OnboardingStep } from 'types/UiConfig';

export type WizardStepProps = {
  primaryAction: {
    content: string;
    onAction?: () => void;
    url?: string;
    loading?: boolean;
  };
  additionalContent?: JSX.Element | null;
  id: WizardStep;
  illustration: string;
  isNew: boolean;
  isPassed: boolean;
  preventPassingStepOnAction?: boolean;
  secondaryAction?: {
    content: string;
    onAction?: () => void;
    url?: string;
    loading?: boolean;
  } | null;
  subtitle: string[];
  title: string;
};

export type WizardStep = OnboardingStep;
