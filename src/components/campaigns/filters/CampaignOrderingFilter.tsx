import { OrderingFilter } from '@/shared/filters/OrderingFilter';
import { useCampaignsTableOrderingChoices } from './useCampaignsTableOrderingChoices';

export const CampaignOrderingFilter = () => {
  const orderingChoices = useCampaignsTableOrderingChoices();

  return <OrderingFilter orderingChoices={orderingChoices} />;
};
