import { Layout, LegacyCard, LegacyStack, Text } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

import { UsageProgressbar } from '@/shared/UsageProgressbar';

export const CurrentPlanCard = () => {
  const t = useTranslation();

  return (
    <Layout.Section fullWidth>
      <LegacyCard sectioned>
        <LegacyStack distribution="equalSpacing" alignment="trailing">
          <LegacyStack spacing="extraTight" vertical>
            <Text as="p" variant="bodyMd" color="subdued">
              {t('current_plan_card.title')}
            </Text>
            <Text as="h6" variant="headingSm">
              Basic
            </Text>
          </LegacyStack>

          <UsageProgressbar label={t('current_plan_card.active_discounted_variants')} count={20} total={100} />
          <UsageProgressbar label={t('current_plan_card.created_campaigns')} count={3} total={10} />
        </LegacyStack>
      </LegacyCard>
    </Layout.Section>
  );
};
