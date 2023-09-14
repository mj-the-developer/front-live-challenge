/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Status, DiscountType, Trend, CampaignCampaignDiscountPriceTrendTypeChoices } from 'types/globalTypes';

// ====================================================
// GraphQL fragment: CampaignInfo
// ====================================================

export interface CampaignInfo_structure_discount {
  __typename: 'CampaignDiscountType';
  discount: number;
  discountType: DiscountType | null;
  priceTrend: Trend | null;
  priceTrendType: CampaignCampaignDiscountPriceTrendTypeChoices | null;
}

export interface CampaignInfo_structure {
  __typename: 'CampaignStructureType';
  discount: CampaignInfo_structure_discount | null;
  endedAt: any | null;
  excludeFilter: any;
  includeFilter: any;
  startedAt: any | null;
}

export interface CampaignInfo {
  __typename: 'CampaignType';
  estimation: number;
  id: string;
  isCombinationAllowed: boolean;
  name: string;
  status: Status | null;
  structure: CampaignInfo_structure | null;
}
