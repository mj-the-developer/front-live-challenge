import { Layout, Page } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

import { CurrentPlanCard } from '@/shared/cards/CurrentPlanCard';
import { CampaignsTable } from './table/CampaignsTable';
import { PATHS } from 'config/constants';

export const Campaigns = () => {
  const t = useTranslation();

  return (
    <Page
      title={t('campaigns_page.title')}
      primaryAction={{ content: t('campaigns_page.action'), url: `${PATHS.CAMPAIGNS}new/` }}
      fullWidth
    >
      <Layout>
        <CurrentPlanCard />
        <CampaignsTable />
      </Layout>
    </Page>
  );
};
