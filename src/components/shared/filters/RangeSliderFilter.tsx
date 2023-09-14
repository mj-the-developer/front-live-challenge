import { RangeSlider, LegacyStack, Text } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

import { FilterComponentProps } from './FilterComponentProps';
import { useURLSearchParams } from 'hooks/useURLSearchParams';
import { useDelayAction } from 'hooks/useDelayAction';
import { formatMoney } from 'utils/formatMoney';

type Props = FilterComponentProps & {
  initialRange: [number, number];
  prefix?: string;
  step: number;
};

export const RangeSliderFilter = ({ fieldKey, initialRange, prefix, step }: Props) => {
  const { urlSearchParams, setParam } = useURLSearchParams();
  const t = useTranslation();

  const [minValue, setMinValue] = useDelayAction(
    setParam,
    [`min_${fieldKey}`],
    urlSearchParams[`min_${fieldKey}`]?.[0] ?? `${initialRange[0]}`
  );

  const [maxValue, setMaxValue] = useDelayAction(
    setParam,
    [`max_${fieldKey}`],
    urlSearchParams[`max_${fieldKey}`]?.[0] ?? `${initialRange[1]}`
  );

  const onChangeRange = (value: [number, number]) => {
    setMinValue(`${value[0]}`);
    setMaxValue(`${value[1]}`);
  };

  return (
    <LegacyStack spacing="extraTight" vertical>
      <RangeSlider
        output
        label={t(`table_filters.${fieldKey}`)}
        labelHidden
        value={[parseInt(minValue), parseInt(maxValue)]}
        min={initialRange[0]}
        max={initialRange[1]}
        step={step}
        onChange={onChangeRange}
      />
      <Text as="span" variant="bodyMd" color="subdued">
        {`${prefix ?? ''}${formatMoney(parseInt(minValue), false)} - ${prefix ?? ''}${formatMoney(
          parseInt(maxValue),
          false
        )}`}
      </Text>
    </LegacyStack>
  );
};
