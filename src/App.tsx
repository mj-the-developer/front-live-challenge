import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import { BrowserRouter } from 'react-router-dom';
import '@shopify/polaris/build/esm/styles.css';

import { RouterLink } from './RouterLink';
import Router from './Router';
import { useBrowserRouterConfirmation } from 'hooks/useBrowserRouterConfirmation';
import 'assets/sass/app.scss';
import 'assets/bootstrap-grid.css';
import { LeavePageModal } from '@/modals/LeavePageModal';

export const App = () => {
  const { isModalOpen, onCancelLeaving, onConfirmLeaving, getUserConfirmation } = useBrowserRouterConfirmation();

  return (
    <BrowserRouter getUserConfirmation={getUserConfirmation}>
      <AppProvider i18n={enTranslations} linkComponent={RouterLink}>
        <Router />
        <LeavePageModal isOpen={isModalOpen} onClose={onCancelLeaving} onConfirm={onConfirmLeaving} />
      </AppProvider>
    </BrowserRouter>
  );
};
