import { Button, Text, Icon, LegacyCard, LegacyStack } from '@shopify/polaris';
import { ChevronDownMinor, ChevronUpMinor } from '@shopify/polaris-icons';

import { WizardProgressBar } from './WizardProgressBar';

type Props = {
  allStepsCount: number;
  isOnModal?: boolean;
  passedStepsCount: number;
  showSteps: boolean;
  subtitle: string;
  title: string;
  toggleShowSteps: () => void;
};

export const WizardHeader = ({
  allStepsCount,
  isOnModal,
  showSteps,
  toggleShowSteps,
  passedStepsCount,
  subtitle,
  title,
}: Props) => {
  return (
    <LegacyCard.Section>
      <LegacyStack distribution="equalSpacing">
        <LegacyStack spacing="tight" vertical>
          <Text variant="headingMd" as="h2">
            {title}
          </Text>
          <Text variant="bodyMd" as="p" color="subdued">
            {subtitle}
          </Text>
        </LegacyStack>

        {!isOnModal && (
          <Button plain monochrome onClick={toggleShowSteps}>
            {(<Icon source={showSteps ? ChevronUpMinor : ChevronDownMinor} />) as unknown as string}
          </Button>
        )}
      </LegacyStack>

      <WizardProgressBar passedStepsCount={passedStepsCount} allStepsCount={allStepsCount} />
    </LegacyCard.Section>
  );
};
