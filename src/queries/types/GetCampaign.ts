/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Status, DiscountType, Trend, CampaignCampaignDiscountPriceTrendTypeChoices } from 'types/globalTypes';

// ====================================================
// GraphQL query operation: GetCampaign
// ====================================================

export interface GetCampaign_campaignById_structure_discount {
  __typename: 'CampaignDiscountType';
  discount: number;
  discountType: DiscountType | null;
  priceTrend: Trend | null;
  priceTrendType: CampaignCampaignDiscountPriceTrendTypeChoices | null;
}

export interface GetCampaign_campaignById_structure {
  __typename: 'CampaignStructureType';
  discount: GetCampaign_campaignById_structure_discount | null;
  endedAt: any | null;
  excludeFilter: any;
  includeFilter: any;
  startedAt: any | null;
}

export interface GetCampaign_campaignById {
  __typename: 'CampaignType';
  estimation: number;
  id: string;
  isCombinationAllowed: boolean;
  name: string;
  status: Status | null;
  structure: GetCampaign_campaignById_structure | null;
}

export interface GetCampaign {
  campaignById: GetCampaign_campaignById | null;
}

export interface GetCampaignVariables {
  campaignId: number;
}
