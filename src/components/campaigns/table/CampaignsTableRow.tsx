import { Badge, IndexTable, LegacyStack, Link, Text } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

import { AdaptedCampaign } from '../CampaignsAdapter';
import { PATHS } from 'config/constants';

import { Status } from 'types/globalTypes';

type Props = {
  campaign: AdaptedCampaign;
  selectedResources: string[];
};

export const CampaignsTableRow = ({ campaign, selectedResources }: Props) => {
  const t = useTranslation();

  return (
    <IndexTable.Row
      id={campaign.id}
      selected={selectedResources.includes(campaign.id)}
      position={parseInt(campaign.id)}
    >
      <IndexTable.Cell>
        <Link url={`${PATHS.CAMPAIGNS}${campaign.id}/`} dataPrimaryLink monochrome removeUnderline>
          <LegacyStack spacing="extraTight" vertical>
            <strong className="truncated-text" style={{ width: 150 }}>
              {campaign.name}
            </strong>
            <Text as="p" variant="bodySm" color="subdued">
              {campaign.discount}
            </Text>
          </LegacyStack>
        </Link>
      </IndexTable.Cell>
      <IndexTable.Cell>-</IndexTable.Cell>
      <IndexTable.Cell>
        <Badge status={campaign.status === Status.Active ? 'success' : 'new'}>{campaign.status}</Badge>
      </IndexTable.Cell>
      <IndexTable.Cell>{`${campaign.productsCount} (${campaign.variantsCount} variants)`}</IndexTable.Cell>
      <IndexTable.Cell>
        <p>
          {campaign.startDate
            ? t('summary_card.starts_on', { datestring: campaign.startDate })
            : t('field_labels.starts_immediately')}
        </p>
        <p>{campaign.endDate ? t('summary_card.ends_on', { datestring: campaign.endDate }) : ''}</p>
      </IndexTable.Cell>
      <IndexTable.Cell>{campaign.revenue}</IndexTable.Cell>
      <IndexTable.Cell>{campaign.ordersCount}</IndexTable.Cell>
    </IndexTable.Row>
  );
};
