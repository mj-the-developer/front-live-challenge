import { DatePicker, Range } from '@shopify/polaris';
import { useState } from 'react';

import { FilterComponentProps } from './FilterComponentProps';
import { useURLSearchParams } from 'hooks/useURLSearchParams';
import { convertToOnlyDate } from 'utils/dateTimeUtils';

export const DatePickerFilter = ({ fieldKey }: FilterComponentProps) => {
  const { urlSearchParams, setBulkParams } = useURLSearchParams();

  const [{ month, year }, setDate] = useState(() => {
    const now = new Date();
    return { month: now.getMonth(), year: now.getFullYear() };
  });

  const onChangeDate = (fieldValue: Range) => {
    setBulkParams([
      {
        key: `min_${fieldKey}`,
        value: `${convertToOnlyDate(fieldValue.start)} 00:00:00`,
      },
      {
        key: `max_${fieldKey}`,
        value: `${convertToOnlyDate(fieldValue.end.toDateString())} 23:59:59`,
      },
    ]);
  };

  const minSelectedDate = urlSearchParams?.[`min_${fieldKey}`]?.[0];
  const maxSelectedDate = urlSearchParams?.[`max_${fieldKey}`]?.[0];

  return (
    <DatePicker
      onChange={onChangeDate}
      selected={
        !!minSelectedDate && !!maxSelectedDate
          ? {
              end: new Date(`${convertToOnlyDate(maxSelectedDate)} 00:00:00`),
              start: new Date(`${convertToOnlyDate(minSelectedDate)} 00:00:00`),
            }
          : new Date()
      }
      month={month}
      year={year}
      onMonthChange={(month, year) => setDate({ month, year })}
      allowRange
    />
  );
};
