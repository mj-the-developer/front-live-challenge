import { AdaptedCampaign } from './CampaignsAdapter';

type SearchParams = {
  ordering?: [
    'created_at' | 'start_time' | 'end_time' | 'name' | '-created_at' | '-start_time' | '-end_time' | '-name',
  ];
};

export const sortCampaigns = (campaigns: AdaptedCampaign[], searchParams: SearchParams) => {
  return campaigns;
};
