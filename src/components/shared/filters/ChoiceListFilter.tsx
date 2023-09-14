import { ChoiceList, ChoiceListProps } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

import { FilterComponentProps } from './FilterComponentProps';
import { useURLSearchParams } from 'hooks/useURLSearchParams';

type Props = FilterComponentProps & {
  choices: ChoiceListProps['choices'];
};

export const ChoiceListFilter = ({ fieldKey, choices }: Props) => {
  const { urlSearchParams, appendBulkParams } = useURLSearchParams();
  const t = useTranslation();

  const onChangeChoices = (choices: string[]) => {
    appendBulkParams(fieldKey, choices);
  };

  return (
    <ChoiceList
      allowMultiple
      title={t(`table_filters.${fieldKey}`)}
      titleHidden
      choices={choices}
      onChange={onChangeChoices}
      selected={urlSearchParams[fieldKey] ?? []}
    />
  );
};
