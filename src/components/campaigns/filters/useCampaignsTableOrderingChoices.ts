import { useTranslation } from 'react-multi-lang';

import { OrderingChoiceType } from '@/shared/filters/OrderingFilter';

export const useCampaignsTableOrderingChoices = () => {
  const t = useTranslation();

  return [
    {
      label: t('ordering_choice.created_at'),
      value: 'created_at',
      type: OrderingChoiceType.Date,
    },
    {
      label: t('ordering_choice.start_time'),
      value: 'start_time',
      type: OrderingChoiceType.Date,
    },
    {
      label: t('ordering_choice.end_time'),
      value: 'end_time',
      type: OrderingChoiceType.Date,
    },
    {
      label: t('ordering_choice.name'),
      value: 'name',
      type: OrderingChoiceType.Alphabetic,
    },
    // {
    //   label: t('ordering_choice.products_count'),
    //   value: 'products_count',
    //   type: OrderingChoiceType.Count,
    // },
    // {
    //   label: t('ordering_choice.revenue'),
    //   value: 'revenue',
    //   type: OrderingChoiceType.Count,
    // },
    // {
    //   label: t('ordering_choice.order_count'),
    //   value: 'order_count',
    //   type: OrderingChoiceType.Count,
    // },
  ];
};
