import { Button, LegacyCard, Collapsible, Text, Icon, LegacyStack } from '@shopify/polaris';
import { ChevronDownMinor, ChevronUpMinor } from '@shopify/polaris-icons';

import { useToggle } from 'hooks/useToggle';

type Props = {
  children: JSX.Element | JSX.Element[];
  isOpen?: boolean;
  title: string | JSX.Element;
};

export const CollapsibleCard = ({ title, children, isOpen = false }: Props) => {
  const [isAccordionOpen, toggleAccordion] = useToggle(isOpen);

  return (
    <LegacyCard sectioned>
      <LegacyStack alignment="center" distribution="equalSpacing">
        <Text variant="headingSm" as="h2">
          {title}
        </Text>
        <div onClick={toggleAccordion} style={{ width: 100, cursor: 'pointer', textAlign: 'right' }}>
          <Button plain monochrome>
            {(<Icon source={isAccordionOpen ? ChevronUpMinor : ChevronDownMinor} />) as unknown as string}
          </Button>
        </div>
      </LegacyStack>

      <Collapsible
        open={isAccordionOpen}
        id={`${title}-collapsible`}
        transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
      >
        <div style={{ paddingTop: 12.5 }}>{children}</div>
      </Collapsible>
    </LegacyCard>
  );
};
