import { LegacyStack, ProgressBar, Text } from '@shopify/polaris';

type Props = {
  count: number;
  label: string;
  total: number;
};

export const UsageProgressbar = ({ count, label, total }: Props) => {
  return (
    <div className="usage-progress-bar-wrapper">
      <LegacyStack spacing="baseTight" vertical>
        <div className="progress-bar">
          <ProgressBar progress={(count / total) * 100} size="small" color="primary" />
        </div>
        <Text as="p" variant="bodyMd" color="subdued">
          {label}
        </Text>
      </LegacyStack>

      <div className="usage-progress-bar-counter">
        <Text as="h6" variant="headingSm">{`${count}/${total}`}</Text>
      </div>
    </div>
  );
};
