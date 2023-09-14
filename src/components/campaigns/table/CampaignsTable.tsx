import { IndexTable, Layout, LegacyCard } from '@shopify/polaris';
import { NonEmptyArray } from '@shopify/polaris/build/ts/src/types';
import { IndexTableHeading } from '@shopify/polaris/build/ts/src/components/IndexTable';

import { CampaignFilters } from '../filters/CampaignFilters';
import { useCampaignsTableHeadings } from './useCampaignsTableHeadings';
import { useCampaignsTableBulkActions } from './useCampaignsTableBulkActions';
import { CampaignsTableRow } from './CampaignsTableRow';
import { useCampaigns } from '../useCampaigns';

export const CampaignsTable = () => {
  const { campaigns, loading } = useCampaigns();
  const tableHeadings = useCampaignsTableHeadings();

  const { indexResourceState, bulkActions } = useCampaignsTableBulkActions(campaigns);

  return (
    <Layout.Section fullWidth>
      <LegacyCard>
        <CampaignFilters />

        <IndexTable
          resourceName={{ singular: 'campaign', plural: 'campaigns' }}
          itemCount={loading ? 1 : campaigns.length}
          selectedItemsCount={
            indexResourceState.allResourcesSelected ? 'All' : indexResourceState.selectedResources.length
          }
          onSelectionChange={indexResourceState.handleSelectionChange}
          bulkActions={bulkActions}
          headings={tableHeadings as NonEmptyArray<IndexTableHeading>}
          loading={loading}
        >
          {campaigns.map((campaign) => (
            <CampaignsTableRow
              key={campaign.id}
              campaign={campaign}
              selectedResources={indexResourceState.selectedResources}
            />
          ))}
        </IndexTable>
      </LegacyCard>
    </Layout.Section>
  );
};
