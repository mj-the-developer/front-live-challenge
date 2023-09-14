import { useTranslation } from 'react-multi-lang';

import { ProductStatus } from 'types/Product';

export const useProductsStatusChoices = () => {
  const t = useTranslation();

  return Object.values(ProductStatus).map((status) => ({
    label: t(`product_status.${status}`),
    value: status,
  }));
};
