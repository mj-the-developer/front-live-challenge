import { useTranslation } from 'react-multi-lang';

export const useTopCampaignsTableHeadings = () => {
  const t = useTranslation();

  return [
    { title: t('table_headings.name') },
    { title: t('table_headings.status') },
    { title: t('table_headings.discount') },
    { title: t('table_headings.start_date') },
    { title: t('table_headings.total_orders') },
  ];
};
