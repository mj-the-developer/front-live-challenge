import { Layout, LegacyCard } from '@shopify/polaris';
import { CircleDisabledMajor, ClockMajor, DiscountsMajor, StatusActiveMajor } from '@shopify/polaris-icons';
import { useTranslation } from 'react-multi-lang';
import parse from 'html-react-parser';

import { PATHS } from 'config/constants';
import { LinkedCardSection } from '@/shared/LinkedCardSection';

export const StatisticsCard = () => {
  const t = useTranslation();

  return (
    <Layout.Section fullWidth>
      <LegacyCard>
        <LinkedCardSection
          icon={DiscountsMajor}
          title={parse(t('statistics.active_campaigns', { count: '2' }))}
          primaryBadge={t('statistics.products_count', { products_count: '74', variants_count: '543' })}
          secondaryBadge={t('statistics.revenue_amount', { revenue_amount: '+ $872', orders_count: '28' })}
          url={`${PATHS.CAMPAIGNS}?ordering=created_at&status=active`}
        />
        <LinkedCardSection
          icon={ClockMajor}
          title={parse(t('statistics.scheduled_campaigns', { count: '0' }))}
          primaryBadge="-"
          url={`${PATHS.CAMPAIGNS}?ordering=created_at&status=scheduled`}
        />
        <LinkedCardSection
          icon={CircleDisabledMajor}
          title={parse(t('statistics.inactive_campaigns', { count: '7' }))}
          primaryBadge={t('statistics.products_count', { products_count: '123', variants_count: '827' })}
          url={`${PATHS.CAMPAIGNS}?ordering=created_at&status=inactive`}
        />
        <LinkedCardSection
          icon={StatusActiveMajor}
          title={parse(t('statistics.expired_campaigns', { count: '2' }))}
          primaryBadge={t('statistics.products_count', { products_count: '43', variants_count: '53' })}
          secondaryBadge={t('statistics.revenue_amount', { revenue_amount: '+ $1272', orders_count: '32' })}
          url={`${PATHS.CAMPAIGNS}?ordering=created_at&status=expired`}
        />
      </LegacyCard>
    </Layout.Section>
  );
};
