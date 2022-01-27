import { Switch, Route } from "react-router-dom";
import { Login, CoopForm, ChickenForm } from "..";

export default function AdminRoutes({ admin, setAdmin, coops, setCoops }) {
  const renderRoutes = !admin ? (
    <Route>
      <Route path="/admin/login">
        <Login setAdmin={setAdmin} />
      </Route>
    </Route>
  ) : (
    <Switch>
      <Route path="/admin/add-coop">
        <CoopForm setCoops={setCoops} />
      </Route>
      <Route path="/admin/add-chicken">
        <ChickenForm coops={coops} setCoops={setCoops} />
      </Route>
    </Switch>
  );

  return renderRoutes;
}
