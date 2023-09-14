import { DatePicker, Icon, Popover, Range, TextField } from '@shopify/polaris';
import { useState } from 'react';
import { CalendarMinor } from '@shopify/polaris-icons';

import { useToggle } from 'hooks/useToggle';

type Props = {
  label: string;
  onChange: (value: string) => void;
  value: string;
};

export const DatePickerField = ({ label, onChange, value }: Props) => {
  const [isPopoverOpen, togglePopover] = useToggle(false);

  const [{ month, year }, setDate] = useState(() => {
    const now = new Date();
    return { month: now.getMonth(), year: now.getFullYear() };
  });

  const onChangeDate = (date: Range) => {
    onChange(date.start.toLocaleDateString());
    togglePopover();
  };

  return (
    <Popover
      active={isPopoverOpen}
      activator={
        <TextField
          autoComplete="off"
          label={label}
          value={value}
          onChange={onChange}
          prefix={<Icon source={CalendarMinor} />}
          onFocus={togglePopover}
        />
      }
      onClose={togglePopover}
    >
      <Popover.Section>
        <DatePicker
          month={month}
          year={year}
          onMonthChange={(month, year) => setDate({ month, year })}
          onChange={onChangeDate}
          selected={new Date(value)}
        />
      </Popover.Section>
    </Popover>
  );
};
