export interface Plan {
  name: string;
  monthly_price: number;
  is_current_plan: boolean;
  variant_discount_limit: number | null;
  campaign_limit: number | null;
  is_recommended: boolean;
  prev_plan: string | undefined;
  features: string[];
}

export enum PlanPeriod {
  Monthly = 'monthly',
  Yearly = 'yearly',
}
