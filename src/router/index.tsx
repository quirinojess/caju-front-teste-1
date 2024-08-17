import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { DashboardPage, NewUserPage } from "~/pages";

const Router = () => {
 return (
  <HashRouter>
   <Switch>
    <Route exact path={routes.dashboard} component={DashboardPage} />
    <Route exact path={routes.newUser} component={NewUserPage} />
    <Route exact path={routes.history} component={() => <div>History</div>} />
    <Route exact path="*">
     <Redirect to={routes.dashboard} />
    </Route>
   </Switch>
  </HashRouter>
 );
};

export default Router;
