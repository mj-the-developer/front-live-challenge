import { GetCampaigns_campaigns } from 'queries/types/GetCampaigns';
import { Status as BadgeStatus } from '@shopify/polaris/build/ts/src/components/Badge';

import { convertToDateTime } from 'utils/dateTimeUtils';

import { DiscountType, Status } from 'types/globalTypes';

export type AdaptedCampaign = {
  id: string;
  name: string;
  discount: string;
  type: string;
  status: Status | string;
  badgeStatus: BadgeStatus;
  productsCount: number | string;
  variantsCount: number | string;
  startDate: string | null;
  endDate: string | null;
  revenue: number | string;
  ordersCount: number | string;
};

export class CampaignsAdapter {
  private adaptedCampaigns: AdaptedCampaign[];

  constructor(campaigns: GetCampaigns_campaigns[]) {
    this.adaptedCampaigns = campaigns.map((campaign) => ({
      id: campaign.id,
      name: campaign.name,
      discount: this.formatDiscount(campaign.structure?.discount?.discount, campaign.structure?.discount?.discountType),
      type: '-',
      status: campaign.status ?? '-',
      badgeStatus: this.getBadgeStatus(campaign.status),
      productsCount: '-',
      variantsCount: '-',
      startDate: this.formatDate(campaign.structure?.startedAt),
      endDate: this.formatDate(campaign.structure?.endedAt),
      revenue: '-',
      ordersCount: '-',
    }));
  }

  get campaigns() {
    return this.adaptedCampaigns;
  }

  private formatDate(date: Date | null) {
    return date ? convertToDateTime(date) : null;
  }

  private formatDiscount(amount?: number, type?: DiscountType | null) {
    if (!amount || !type) return '-';

    switch (type) {
      case DiscountType.Percentage:
        return `${amount}%`;
      case DiscountType.FixedAmount:
        return `$${amount}`;
      case DiscountType.FixedPrice:
        return `New price: $${amount}`;
      default:
        return '-';
    }
  }

  private getBadgeStatus(status: Status | null): BadgeStatus {
    switch (status) {
      case Status.Active:
        return 'success';
      case Status.Archived:
        return 'info';
      case Status.Canceled:
        return 'warning';
      case Status.Inactive:
        return 'new';
      case Status.Processing:
        return 'info';
      case Status.Scheduled:
        return 'attention';
      default:
        return 'new';
    }
  }
}
