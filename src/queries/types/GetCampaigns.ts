/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Status, DiscountType, Trend, CampaignCampaignDiscountPriceTrendTypeChoices } from 'types/globalTypes';

// ====================================================
// GraphQL query operation: GetCampaigns
// ====================================================

export interface GetCampaigns_campaigns_structure_discount {
  __typename: 'CampaignDiscountType';
  discount: number;
  discountType: DiscountType | null;
  priceTrend: Trend | null;
  priceTrendType: CampaignCampaignDiscountPriceTrendTypeChoices | null;
}

export interface GetCampaigns_campaigns_structure {
  __typename: 'CampaignStructureType';
  discount: GetCampaigns_campaigns_structure_discount | null;
  endedAt: any | null;
  excludeFilter: any;
  includeFilter: any;
  startedAt: any | null;
}

export interface GetCampaigns_campaigns {
  __typename: 'CampaignType';
  estimation: number;
  id: string;
  isCombinationAllowed: boolean;
  name: string;
  status: Status | null;
  structure: GetCampaigns_campaigns_structure | null;
}

export interface GetCampaigns {
  campaigns: GetCampaigns_campaigns[] | null;
}
