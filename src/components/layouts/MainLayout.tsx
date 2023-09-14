import { Frame } from '@shopify/polaris';
import { FunctionComponent, useEffect } from 'react';
import { setDefaultLanguage, setTranslations } from 'react-multi-lang';
import { Route, RouteProps } from 'react-router-dom';

import { formatPanelContents } from 'utils/formatPanelContents';
import en from '../../i18n/en-default.json';
import { useFrameProps } from './useFrameProps';
import { AppBridgeDependentUI } from '@/app-bridge/AppBridgeDependentUI';
import { AppBridgeNavigationMenu } from '@/app-bridge/AppBridgeNavigationMenu';
import { ToastMessage } from '@/shared/ToastMessage';
import { useToastStore } from 'states/toast';

interface Props extends RouteProps {
  component: FunctionComponent<any>;
}

export const MainLayout = ({ component: Component, ...restProps }: Props) => {
  const frameProps = useFrameProps();
  const toast = useToastStore();

  useEffect(() => {
    setTranslations({ en: formatPanelContents(en) });
    setDefaultLanguage('en');
  }, []);

  return (
    <Frame {...frameProps}>
      <AppBridgeDependentUI>
        <AppBridgeNavigationMenu />
      </AppBridgeDependentUI>

      <Route children={(routeProps) => <Component {...routeProps} />} {...restProps} />

      {toast.show && <ToastMessage onDismiss={toast.dismissToast} {...toast} />}
    </Frame>
  );
};
