import { useLocation } from 'react-router-dom';
import { Navigation } from '@shopify/polaris';

import { useRoutes } from 'hooks/useRoutes';

export const MainSideNavigation = () => {
  const location = useLocation();
  const routes = useRoutes(location.pathname);

  return (
    <Navigation location={location.pathname}>
      <Navigation.Section title="DISCOUNTY" items={routes} />
    </Navigation>
  );
};
