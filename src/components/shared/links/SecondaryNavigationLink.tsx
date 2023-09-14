import { Icon, LegacyStack, Link, Text } from '@shopify/polaris';
import clsx from 'clsx';
import { ChevronRightMinor } from '@shopify/polaris-icons';

type Props = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  isSmallDevice: boolean;
  selected: boolean;
  title: string;
  url: string;
};

export const SecondaryNavigationLink = ({ icon, isSmallDevice, selected, title, url }: Props) => {
  return (
    <div className={clsx('secondary-navigation-link', { selected })}>
      <Link url={url} removeUnderline monochrome>
        <LegacyStack alignment="center" distribution="equalSpacing">
          <LegacyStack alignment="center" spacing="tight">
            <Icon source={icon} color="base" />
            <Text as="span" variant="bodyMd">
              {title}
            </Text>
          </LegacyStack>

          {!!isSmallDevice && <Icon source={ChevronRightMinor} />}
        </LegacyStack>
      </Link>
    </div>
  );
};
