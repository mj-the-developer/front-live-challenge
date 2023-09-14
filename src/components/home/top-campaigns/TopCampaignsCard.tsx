import { Badge, Button, IndexTable, Layout, LegacyCard, LegacyStack, Text } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';
import { NonEmptyArray } from '@shopify/polaris/build/ts/src/types';
import { IndexTableHeading } from '@shopify/polaris/build/ts/src/components/IndexTable';

import { useTopCampaignsTableHeadings } from './useTopCampaignsTableHeadings';
import { PATHS } from 'config/constants';

export const TopCampaignsCard = () => {
  const tableHeadings = useTopCampaignsTableHeadings();
  const t = useTranslation();

  const rows: any = [
    // {
    //   id: 1,
    //   name: 'Sale 1',
    //   status: 'Active',
    //   discount: '25% off',
    //   start_date: 'Oct 15, 2023 at 02:00',
    //   total_orders: '$643.74',
    // },
  ];

  return (
    <Layout.Section fullWidth>
      <LegacyCard>
        <LegacyCard.Section>
          <LegacyStack alignment="center" distribution="equalSpacing">
            <Text as="h4" variant="headingSm">
              {t('top_campaigns.title', { count: '5' })}
            </Text>
            <Button url={`${PATHS.CAMPAIGNS}?ordering=created_at`}>{t('top_campaigns.view_all')}</Button>
          </LegacyStack>
        </LegacyCard.Section>

        <IndexTable
          itemCount={rows.length}
          headings={tableHeadings as NonEmptyArray<IndexTableHeading>}
          emptyState={<div style={{ color: '#7e8285', textAlign: 'center' }}>{t('top_campaigns.no_campaigns')}</div>}
          loading={false}
          selectable={false}
        >
          {rows.map((row: any) => (
            <IndexTable.Row id={row.id} position={row.id}>
              <IndexTable.Cell>{row.name}</IndexTable.Cell>
              <IndexTable.Cell>
                <Badge status="success">{row.status}</Badge>
              </IndexTable.Cell>
              <IndexTable.Cell>{row.discount}</IndexTable.Cell>
              <IndexTable.Cell>{row.start_date}</IndexTable.Cell>
              <IndexTable.Cell>{row.total_orders}</IndexTable.Cell>
            </IndexTable.Row>
          ))}
        </IndexTable>
      </LegacyCard>
    </Layout.Section>
  );
};
