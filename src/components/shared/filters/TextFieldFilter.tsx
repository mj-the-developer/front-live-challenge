import { TextField } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

import { FilterComponentProps } from './FilterComponentProps';
import { useURLSearchParams } from 'hooks/useURLSearchParams';
import { useDelayAction } from 'hooks/useDelayAction';

export const TextFieldFilter = ({ fieldKey }: FilterComponentProps) => {
  const { urlSearchParams, setParam } = useURLSearchParams();
  const t = useTranslation();

  const [value, setValue] = useDelayAction(setParam, [`${fieldKey}`], urlSearchParams[fieldKey]?.[0] ?? '');

  return (
    <TextField
      autoComplete="off"
      label={t(`table_filters.${fieldKey}`)}
      value={value}
      onChange={setValue}
      labelHidden
    />
  );
};
