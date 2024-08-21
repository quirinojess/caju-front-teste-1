import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import { DashboardPage, NewUserPage } from '~/pages';

const Router = () => {
  return (
    <Switch>
      <Route path={routes.dashboard} element={<DashboardPage />} />
      <Route path={routes.newUser} element={<NewUserPage />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Switch>
  );
};

export default Router;
