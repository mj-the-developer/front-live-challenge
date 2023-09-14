import { Button, ButtonGroup, Icon, Tabs } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';
import { FilterMinor, SearchMinor } from '@shopify/polaris-icons';

import { useURLSearchParams } from 'hooks/useURLSearchParams';
import { CampaignOrderingFilter } from './CampaignOrderingFilter';

const TABS = ['All', 'Active', 'Scheduled', 'Inactive', 'Expired'];

type Props = {
  isOtherFiltersOpen: boolean;
  toggleOtherFilters: () => void;
};

export const CampaignStatusFilter = ({ isOtherFiltersOpen, toggleOtherFilters }: Props) => {
  const { urlSearchParams, setParam, deleteParam } = useURLSearchParams();
  const t = useTranslation();

  const campaignStatusTabs = TABS.map((tab) => ({ id: tab, content: t(`status.${tab}`) }));

  const onTabChange = (selectedTabIndex: number) => {
    const selectedCampaignId = campaignStatusTabs[selectedTabIndex].id;

    if (selectedTabIndex > 0) {
      setParam('status', selectedCampaignId);
    } else {
      deleteParam('status');
    }
  };

  const selectedTab = campaignStatusTabs.findIndex((tab) => tab.id === urlSearchParams.status?.[0]);

  if (isOtherFiltersOpen) return null;

  return (
    <div className="campaigns-table-tabs">
      <Tabs tabs={campaignStatusTabs} selected={selectedTab > -1 ? selectedTab : 0} onSelect={onTabChange} />

      <div className="campaigns-table-tabs-actions">
        <ButtonGroup>
          <Button onClick={toggleOtherFilters} size="slim" icon={SearchMinor}>
            {(<Icon source={FilterMinor} color="base" />) as unknown as string}
          </Button>

          <CampaignOrderingFilter />
        </ButtonGroup>
      </div>
    </div>
  );
};
