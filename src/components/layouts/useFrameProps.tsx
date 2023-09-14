import { TopBar } from '@shopify/polaris';

import { useToggle } from 'hooks/useToggle';
import { isEmbeddedMode } from 'utils/isEmbeddedMode';
import { MainSideNavigation } from './MainSideNavigation';

export const useFrameProps = () => {
  const [openMobileNavigation, toggleMobileNavigation] = useToggle(false);

  return !isEmbeddedMode()
    ? {
        topBar: <TopBar showNavigationToggle onNavigationToggle={toggleMobileNavigation} />,
        navigation: <MainSideNavigation />,
        showMobileNavigation: openMobileNavigation,
        onNavigationDismiss: toggleMobileNavigation,
      }
    : {};
};
