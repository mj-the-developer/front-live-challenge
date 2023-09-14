import { NavigationMenu } from '@shopify/app-bridge-react';
import { useLocation } from 'react-router-dom';

import { useRoutes } from 'hooks/useRoutes';

export const AppBridgeNavigationMenu = () => {
  const location = useLocation();
  const routes = useRoutes(location.pathname);

  const navigationLinks = routes.map((route) => ({
    label: route.label,
    destination: route.url,
  }));

  return (
    <NavigationMenu
      navigationLinks={navigationLinks}
      matcher={(link) => !!routes.find((route) => route.label === link.label)?.selected}
    />
  );
};
