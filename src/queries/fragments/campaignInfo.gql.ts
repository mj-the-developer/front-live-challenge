import { gql } from '@apollo/client';

export const CAMPAIGN_INFO = gql`
  fragment CampaignInfo on CampaignType {
    estimation
    id
    isCombinationAllowed
    name
    status
    structure {
      discount {
        discount
        discountType
        priceTrend
        priceTrendType
      }
      endedAt
      excludeFilter
      includeFilter
      startedAt
    }
  }
`;
