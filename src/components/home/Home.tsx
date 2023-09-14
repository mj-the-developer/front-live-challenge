import { Layout, Page } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

import { Onboarding } from './onboarding/Onboarding';
import { StatisticsCard } from './statistics/StatisticsCard';
import { TopCampaignsCard } from './top-campaigns/TopCampaignsCard';
import { CurrentPlanCard } from '@/shared/cards/CurrentPlanCard';
import { PATHS } from 'config/constants';

export const Home = () => {
  const t = useTranslation();

  return (
    <Page
      title={t('home_page.title')}
      primaryAction={{ content: t('home_page.action'), url: `${PATHS.CAMPAIGNS}new/` }}
    >
      <Layout>
        <CurrentPlanCard />
        <Onboarding />
        <StatisticsCard />
        <TopCampaignsCard />
      </Layout>
    </Page>
  );
};
