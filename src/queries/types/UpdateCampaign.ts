/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  CampaignInput,
  Status,
  DiscountType,
  Trend,
  CampaignCampaignDiscountPriceTrendTypeChoices,
} from 'types/globalTypes';

// ====================================================
// GraphQL mutation operation: UpdateCampaign
// ====================================================

export interface UpdateCampaign_updateCampaign_campaign_structure_discount {
  __typename: 'CampaignDiscountType';
  discount: number;
  discountType: DiscountType | null;
  priceTrend: Trend | null;
  priceTrendType: CampaignCampaignDiscountPriceTrendTypeChoices | null;
}

export interface UpdateCampaign_updateCampaign_campaign_structure {
  __typename: 'CampaignStructureType';
  discount: UpdateCampaign_updateCampaign_campaign_structure_discount | null;
  endedAt: any | null;
  excludeFilter: any;
  includeFilter: any;
  startedAt: any | null;
}

export interface UpdateCampaign_updateCampaign_campaign {
  __typename: 'CampaignType';
  estimation: number;
  id: string;
  isCombinationAllowed: boolean;
  name: string;
  status: Status | null;
  structure: UpdateCampaign_updateCampaign_campaign_structure | null;
}

export interface UpdateCampaign_updateCampaign {
  __typename: 'UpdateCampaignMutation';
  campaign: UpdateCampaign_updateCampaign_campaign | null;
}

export interface UpdateCampaign {
  updateCampaign: UpdateCampaign_updateCampaign | null;
}

export interface UpdateCampaignVariables {
  campaign: CampaignInput;
}
