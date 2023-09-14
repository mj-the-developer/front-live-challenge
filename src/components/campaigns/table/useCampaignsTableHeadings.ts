import { useTranslation } from 'react-multi-lang';

export const useCampaignsTableHeadings = () => {
  const t = useTranslation();

  return [
    { title: t('table_headings.name') },
    { title: t('table_headings.type') },
    { title: t('table_headings.status') },
    { title: t('table_headings.products') },
    { title: t('table_headings.time') },
    { title: t('table_headings.revenue') },
    { title: t('table_headings.orders') },
  ];
};
