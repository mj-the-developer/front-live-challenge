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
// GraphQL mutation operation: CreateCampaign
// ====================================================

export interface CreateCampaign_createCampaign_campaign_structure_discount {
  __typename: 'CampaignDiscountType';
  discount: number;
  discountType: DiscountType | null;
  priceTrend: Trend | null;
  priceTrendType: CampaignCampaignDiscountPriceTrendTypeChoices | null;
}

export interface CreateCampaign_createCampaign_campaign_structure {
  __typename: 'CampaignStructureType';
  discount: CreateCampaign_createCampaign_campaign_structure_discount | null;
  endedAt: any | null;
  excludeFilter: any;
  includeFilter: any;
  startedAt: any | null;
}

export interface CreateCampaign_createCampaign_campaign {
  __typename: 'CampaignType';
  estimation: number;
  id: string;
  isCombinationAllowed: boolean;
  name: string;
  status: Status | null;
  structure: CreateCampaign_createCampaign_campaign_structure | null;
}

export interface CreateCampaign_createCampaign {
  __typename: 'CreateCampaignMutation';
  campaign: CreateCampaign_createCampaign_campaign | null;
}

export interface CreateCampaign {
  createCampaign: CreateCampaign_createCampaign | null;
}

export interface CreateCampaignVariables {
  campaign: CampaignInput;
}
