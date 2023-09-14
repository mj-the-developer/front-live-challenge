import { ActionList, Button, ChoiceList, Divider, Popover } from '@shopify/polaris';
import { SortMinor } from '@shopify/polaris-icons';
import { useTranslation } from 'react-multi-lang';
import { ArrowUpMinor, ArrowDownMinor } from '@shopify/polaris-icons';

import { useToggle } from 'hooks/useToggle';
import { useURLSearchParams } from 'hooks/useURLSearchParams';
import { formatSortText } from 'utils/formatSortText';

type Props = {
  orderingChoices: {
    label: string;
    type: OrderingChoiceType;
    value: string;
  }[];
};

export const OrderingFilter = ({ orderingChoices }: Props) => {
  const { urlSearchParams, setParam } = useURLSearchParams();
  const t = useTranslation();

  const [isSortingPopoverOpen, toggleSortingPopover] = useToggle(false);

  const onChangeOrdering = (ordering: string) => {
    setParam('ordering', ordering);
  };

  const selectedChoice = orderingChoices.find(
    (choice) => choice.value === formatSortText(urlSearchParams.ordering?.[0] ?? '')
  );

  return (
    <Popover
      active={isSortingPopoverOpen}
      activator={<Button size="slim" icon={SortMinor} onClick={toggleSortingPopover} />}
      onClose={toggleSortingPopover}
    >
      <Popover.Section>
        <ChoiceList
          title={t('ordering_choice.title')}
          choices={orderingChoices}
          selected={urlSearchParams.ordering ? [selectedChoice?.value ?? ''] : []}
          onChange={(values) => onChangeOrdering(values[0])}
        />
      </Popover.Section>

      <Divider />

      <ActionList
        items={[
          {
            icon: ArrowUpMinor,
            content: t(`ordering_choice_type.${selectedChoice?.type}_asc`),
            active: urlSearchParams.ordering?.[0].charAt(0) !== '-',
            onAction: () => onChangeOrdering(selectedChoice?.value ?? ''),
          },
          {
            icon: ArrowDownMinor,
            content: t(`ordering_choice_type.${selectedChoice?.type}_desc`),
            active: urlSearchParams.ordering?.[0].charAt(0) === '-',
            onAction: () => onChangeOrdering('-' + selectedChoice?.value ?? ''),
          },
        ]}
      />
    </Popover>
  );
};

export enum OrderingChoiceType {
  Alphabetic = 'alphabetic',
  Count = 'count',
  Date = 'date',
}
