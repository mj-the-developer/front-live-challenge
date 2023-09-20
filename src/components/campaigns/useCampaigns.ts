import { useEffect, useState } from 'react';

import { AdaptedCampaign } from './CampaignsAdapter';
import { useURLSearchParams } from 'hooks/useURLSearchParams';
import { filterCampaigns } from './filterCampaigns';
import { sortCampaigns } from './sortCampaigns';
import campaignsData from './campaignsData.json';

export const useCampaigns = () => {
  const { urlSearchParams } = useURLSearchParams();

  // @ts-ignore
  const [campaigns, setCampaigns] = useState<AdaptedCampaign[]>([]);

  useEffect(() => {
    const filteredCampaigns = filterCampaigns(campaignsData, urlSearchParams);
    const sortedCampaigns = sortCampaigns(filteredCampaigns, urlSearchParams);

    setCampaigns(sortedCampaigns);
  }, [urlSearchParams]);

  return { campaigns, loading: false };
};
