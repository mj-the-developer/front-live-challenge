/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * An enumeration.
 */
export enum CampaignCampaignDiscountPriceTrendTypeChoices {
  A_1 = "A_1",
  A_2 = "A_2",
  A_3 = "A_3",
}

/**
 * An enumeration.
 */
export enum DiscountType {
  FixedAmount = "FixedAmount",
  FixedPrice = "FixedPrice",
  Percentage = "Percentage",
}

/**
 * An enumeration.
 */
export enum PriceTrendType {
  Constant = "Constant",
  Decrease = "Decrease",
  Increase = "Increase",
}

/**
 * An enumeration.
 */
export enum Status {
  Active = "Active",
  Archived = "Archived",
  Canceled = "Canceled",
  Inactive = "Inactive",
  Processing = "Processing",
  Scheduled = "Scheduled",
}

/**
 * An enumeration.
 */
export enum Trend {
  Constant = "Constant",
  Decrease = "Decrease",
  Increase = "Increase",
}

export interface CampaignDiscountInput {
  discount?: number | null;
  discountType?: DiscountType | null;
  priceTrendType?: PriceTrendType | null;
  priceTrend?: number | null;
}

export interface CampaignInput {
  name?: string | null;
  isCombinationAllowed?: boolean | null;
  status?: Status | null;
  id?: string | null;
  structure?: CampaignStructureInput | null;
}

export interface CampaignStructureInput {
  startedAt?: any | null;
  endedAt?: any | null;
  includeFilter?: any | null;
  excludeFilter?: any | null;
  discount?: CampaignDiscountInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
