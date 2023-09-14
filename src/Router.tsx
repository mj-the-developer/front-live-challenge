import { Route, Switch, withRouter } from 'react-router-dom';
import { History, LocationOrHref, useClientRouting, useRoutePropagation } from '@shopify/app-bridge-react';

import { NotFound } from '@/NotFound';
import { Home } from '@/home/Home';
import { MainLayout } from '@/layouts/MainLayout';
import { PATHS } from 'config/constants';
import { Campaigns } from '@/campaigns/Campaigns';
import { Login } from '@/Login';

type Props = {
  location: LocationOrHref;
  history: History;
};

const Router = ({ location, history }: Props) => {
  try {
    useRoutePropagation(location);
  } catch (error) {}

  try {
    useClientRouting(history);
  } catch (error) {}

  return (
    <Switch>
      <MainLayout exact path={PATHS.ROOT} component={Home} />
      <MainLayout exact path={PATHS.CAMPAIGNS} component={Campaigns} />

      <Route exact path={PATHS.LOGIN} component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default withRouter(Router);
