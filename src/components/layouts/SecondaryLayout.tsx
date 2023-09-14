import { Card, Layout, LegacyStack, Page } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';
import { useLocation } from 'react-router-dom';

import { SecondaryNavigationLink } from '@/shared/links/SecondaryNavigationLink';
import { useMediaQuery } from 'hooks/useMediaQuery';

type Props = {
  pages: {
    component: () => JSX.Element;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    selected: boolean;
    title: string;
    url: string;
  }[];
  pageTitle: string;
  rootPath: string;
};

export const SecondaryLayout = ({ pages, pageTitle, rootPath }: Props) => {
  const location = useLocation();
  const isSmallDevice = useMediaQuery('(max-width: 787px)');
  const t = useTranslation();

  const isRootPath = location.pathname === rootPath;

  const targetPage = pages.find((page) => page.selected);
  const TargetComponent = targetPage?.component ?? (() => null);

  return (
    <Page
      title={!isSmallDevice || isRootPath ? pageTitle : targetPage?.title}
      backAction={isSmallDevice && !isRootPath ? { content: t('page.back_action'), url: rootPath } : undefined}
    >
      <Layout>
        {((isSmallDevice && isRootPath) || !isSmallDevice) && (
          <Layout.Section secondary>
            <Card padding="2">
              <LegacyStack spacing="extraTight" vertical>
                {pages.map((page) => (
                  <SecondaryNavigationLink key={page.url} isSmallDevice={isSmallDevice} {...page} />
                ))}
              </LegacyStack>
            </Card>
          </Layout.Section>
        )}

        {((isSmallDevice && !isRootPath) || !isSmallDevice) && (
          <Layout.Section fullWidth={isSmallDevice}>
            <TargetComponent />
          </Layout.Section>
        )}
      </Layout>
    </Page>
  );
};
