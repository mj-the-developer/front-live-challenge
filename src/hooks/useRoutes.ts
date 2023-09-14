import { DiscountAutomaticMajor, HomeMajor } from '@shopify/polaris-icons';
import { useTranslation } from 'react-multi-lang';

import { PATHS } from 'config/constants';

export const useRoutes = (pathname: string) => {
  const t = useTranslation();

  return [
    {
      label: t('routes.home'),
      icon: HomeMajor,
      url: PATHS.ROOT,
      selected: pathname === '/',
    },
    {
      label: t('routes.campaigns'),
      icon: DiscountAutomaticMajor,
      url: `${PATHS.CAMPAIGNS}?ordering=created_at`,
      selected: pathname.includes(PATHS.CAMPAIGNS),
    },
  ];
};
