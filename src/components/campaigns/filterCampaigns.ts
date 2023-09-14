import { AdaptedCampaign } from './CampaignsAdapter';

type SearchParams = {
  max_start_date?: string[];
  min_start_date?: string[];
  search?: string[];
  status?: string[];
};

export const filterCampaigns = (campaigns: AdaptedCampaign[], searchParams: SearchParams) => {
  return campaigns;
};
