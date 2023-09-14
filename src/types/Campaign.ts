import { Status, DiscountType as DiscountPricingType } from 'types/globalTypes';

export type FlattenCampaignFields = {
  apply_in_cart_independently: boolean;
  apply_discount_once_per_order: boolean;
  automatic_update_eligible_products: boolean;
  combine_with_general_discounts: boolean;
  combine_with_volume_discounts: boolean;
  discount_pricing_type: DiscountPricingType;
  discount_type: DiscountType;
  end_date: string;
  end_time: string;
  general_discount_amount: number;
  general_discount_calculation_policy: DiscountCalculationPolicy;
  general_discount_policy: GeneralDiscountPolicy;
  include_filter: ProductSelectionFilter;
  name: string;
  price_endings: number;
  set_price_endings: boolean;
  schedule_choice: CampaignSchedule;
  start_date: string;
  start_time: string;
  status: Status;
  volume_discount_policy: VolumeDiscountPolicy;
};

export enum DiscountType {
  General = 'general',
  Volume = 'volume',
}

export enum GeneralDiscountPolicy {
  ChangeSalesPrice = 'CHANGE',
  KeepSalesPrice = 'KEEP',
}

export enum DiscountCalculationPolicy {
  PriceBased = 'PRICE',
  CompareAtPriceBased = 'COMPARE_AT_PRICE',
}

export enum VolumeDiscountPolicy {
  MinimumAmount = 'MIN_AMOUNT',
  MinimumQuantity = 'MIN_QUANTITY',
}

export type VolumeDiscountTier = {
  id: number;
  min_policy_value: number;
  value: number;
};

export enum CombinationChoice {
  General = 'GENERAL',
  Volume = 'VOLUME',
}

export enum CampaignSchedule {
  Immediate = 'IMMEDIATE',
  Specific = 'SPECIFIC',
}

export enum ProductSelectionFilter {
  All = 'all',
  Collections = 'collections',
  Tags = 'tags',
  Vendors = 'vendors',
  ProductType = 'product_type',
  PriceRange = 'price_range',
  ProductsVariants = 'products_variants',
}
