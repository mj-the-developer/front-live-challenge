import { Badge, Icon, IconSource, LegacyCard, LegacyStack, Link } from '@shopify/polaris';
import { ChevronRightMinor } from '@shopify/polaris-icons';

type Props = {
  external_url?: boolean;
  icon: IconSource;
  primaryBadge?: string;
  secondaryBadge?: string;
  title: string | JSX.Element | JSX.Element[];
  url: string;
};

export const LinkedCardSection = ({ external_url, icon, primaryBadge, secondaryBadge, title, url }: Props) => {
  return (
    <div className="linked-card-section">
      <LegacyCard.Section>
        <Link url={url} external={external_url} removeUnderline monochrome>
          <LegacyStack alignment="center" distribution="equalSpacing">
            <LegacyStack alignment="center" spacing="tight">
              <Icon source={icon} color="base" />
              <p>{title}</p>
              {!!primaryBadge && <Badge>{primaryBadge}</Badge>}
            </LegacyStack>

            <LegacyStack alignment="center">
              {!!secondaryBadge && <Badge status="success">{secondaryBadge}</Badge>}
              <Icon source={ChevronRightMinor} />
            </LegacyStack>
          </LegacyStack>
        </Link>
      </LegacyCard.Section>
    </div>
  );
};
