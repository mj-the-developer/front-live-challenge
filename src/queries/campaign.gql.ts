import { gql } from '@apollo/client';

import { CAMPAIGN_INFO } from './fragments/campaignInfo.gql';

export const GET_CAMPAIGNS = gql`
  ${CAMPAIGN_INFO}
  query GetCampaigns {
    campaigns {
      ...CampaignInfo
    }
  }
`;

export const CREATE_CAMPAIGN = gql`
  ${CAMPAIGN_INFO}
  mutation CreateCampaign($campaign: CampaignInput!) {
    createCampaign(campaign: $campaign) {
      campaign {
        ...CampaignInfo
      }
    }
  }
`;

export const GET_CAMPAIGN = gql`
  ${CAMPAIGN_INFO}
  query GetCampaign($campaignId: Int!) {
    campaignById(id: $campaignId) {
      ...CampaignInfo
    }
  }
`;

export const UPDATE_CAMPAIGN = gql`
  ${CAMPAIGN_INFO}
  mutation UpdateCampaign($campaign: CampaignInput!) {
    updateCampaign(campaign: $campaign) {
      campaign {
        ...CampaignInfo
      }
    }
  }
`;
