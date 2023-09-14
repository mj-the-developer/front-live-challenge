import { useTranslation } from 'react-multi-lang';

import { useURLSearchParams } from 'hooks/useURLSearchParams';

export const useAppliedFilters = () => {
  const { urlSearchParams, deleteParam } = useURLSearchParams();
  const t = useTranslation();

  return Object.entries(urlSearchParams)
    .filter(([key]) => !['page', 'search', 'ordering'].includes(key))
    .map(([key, values]) => {
      const labelValue = (values ?? []).map((value) => t(`${key}.${value}`).split('.').pop()).join(', ');

      return {
        key,
        label: `${t(`table_filters.${key}`)}: ${labelValue}`,
        onRemove: () => deleteParam(key),
      };
    });
};
