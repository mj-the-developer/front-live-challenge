import { ProgressBar, LegacyStack, Text } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

type Props = {
  allStepsCount: number;
  passedStepsCount: number;
};

export const WizardProgressBar = ({ allStepsCount, passedStepsCount }: Props) => {
  const t = useTranslation();

  const progress = (passedStepsCount / allStepsCount) * 100;

  return (
    <div className="wizard-progressbar" style={{ marginTop: 15 }}>
      <LegacyStack alignment="center" distribution="trailing">
        <Text as="span" color="subdued" variant="bodyMd">
          {t('wizard.progress_label', {
            passed_steps_count: `${passedStepsCount}`,
            steps_count: allStepsCount.toString(),
          })}
        </Text>

        <LegacyStack.Item fill>
          <ProgressBar color="primary" size="small" progress={progress} />
        </LegacyStack.Item>
      </LegacyStack>
    </div>
  );
};
