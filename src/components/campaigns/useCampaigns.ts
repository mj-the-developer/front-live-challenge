import { useEffect, useState } from 'react';

import { AdaptedCampaign } from './CampaignsAdapter';
import { useURLSearchParams } from 'hooks/useURLSearchParams';
import { filterCampaigns } from './filterCampaigns';
import { sortCampaigns } from './sortCampaigns';
import campaignsData from './campaignsData.json';

export const useCampaigns = () => {
  const { urlSearchParams } = useURLSearchParams();

  // @ts-ignore
  const [campaigns, setCampaigns] = useState<AdaptedCampaign[]>(campaignsData);

  useEffect(() => {
    const filteredCampaigns = filterCampaigns(campaigns, urlSearchParams);
    const sortedCampaigns = sortCampaigns(filteredCampaigns, urlSearchParams);

    setCampaigns(sortedCampaigns);
  }, [campaigns, urlSearchParams]);

  return { campaigns, loading: false };
};
