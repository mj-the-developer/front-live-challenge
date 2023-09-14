import { Link, LegacyStack, Text, Thumbnail, ThumbnailProps } from '@shopify/polaris';

type Props = {
  title: string;
  subtitle?: string;
  icon: ThumbnailProps['source'];
  url: string;
  disabled: boolean;
};

export const FeatureStyleLink = ({ title, url, disabled, icon, subtitle }: Props) => {
  return (
    <div className="feature-style-link" style={disabled ? { pointerEvents: 'none', opacity: '0.6' } : {}}>
      <Link url={url} removeUnderline monochrome>
        <LegacyStack alignment="center" wrap={false}>
          {Boolean(icon) && (
            <LegacyStack.Item>
              <Thumbnail source={icon} alt={title} size="small" />
            </LegacyStack.Item>
          )}
          <LegacyStack.Item fill>
            <h5 style={{ color: disabled ? '#8c9196' : '#2c6ecb' }}>
              <Text as="span" fontWeight="semibold" variant="bodyMd">
                {title}
              </Text>
            </h5>
            {!!subtitle && (
              <Text as="span" color="subdued" variant="bodyMd">
                {subtitle}
              </Text>
            )}
          </LegacyStack.Item>
        </LegacyStack>
      </Link>
    </div>
  );
};
