import { ActionList, Icon, Popover, TextField } from '@shopify/polaris';
import { ClockMinor } from '@shopify/polaris-icons';

import { useToggle } from 'hooks/useToggle';

type Props = {
  label: string;
  onChange: (value: string) => void;
  value: string;
};

export const TimePickerField = ({ label, onChange, value }: Props) => {
  const [isPopoverOpen, togglePopover] = useToggle(false);

  const onChangeTime = (selectedTime: string) => {
    onChange(selectedTime);
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
          prefix={<Icon source={ClockMinor} />}
          onFocus={togglePopover}
        />
      }
      onClose={togglePopover}
    >
      <ActionList
        items={timePickerItems.map((item) => ({
          content: item,
          active: value === item,
          onAction: () => onChangeTime(item),
        }))}
      />
    </Popover>
  );
};

const timeChunks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(
  (number) => [`${number > 9 ? '' : '0'}${number}:00`, `${number > 9 ? '' : '0'}${number}:30`]
);

const timePickerItems = timeChunks.reduce((prev, chunk) => prev.concat(chunk), []);
