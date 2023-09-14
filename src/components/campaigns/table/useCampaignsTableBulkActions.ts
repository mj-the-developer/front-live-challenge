import { useIndexResourceState } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

import { AdaptedCampaign } from '../CampaignsAdapter';

export const useCampaignsTableBulkActions = (records: AdaptedCampaign[]) => {
  const t = useTranslation();

  const indexResourceState = useIndexResourceState(records, {
    resourceIDResolver: (record) => record.id,
  });

  const bulkActions = [
    {
      content: t('table_actions.activate_campaigns'),
      onAction: () => console.log('ACTIVATE CAMPAIGNS HANDLER'),
      disabled: false,
    },
    {
      content: t('table_actions.deactivate_campaigns'),
      onAction: () => console.log('DEACTIVATE CAMPAIGNS HANDLER'),
      disabled: false,
    },
  ];

  return { indexResourceState, bulkActions };
};
