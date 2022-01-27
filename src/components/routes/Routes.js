import { Switch, Route } from "react-router-dom";
import { AboutPage, CoopsPage, AvailablePage, CoopPage } from "../../pages";
import { CoopAvailable } from "../../containers";

export default function Routes({ coops, setCoops, admin }) {
  return (
    <Switch>
      <Route exact path="/">
        <AboutPage />
      </Route>
      <Route exact path="/coops">
        <CoopsPage coops={coops} admin={admin} />
      </Route>
      <Route path="/coops/:id/available-chicks">
        <CoopAvailable admin={admin} coops={coops} setCoops={setCoops} />
      </Route>
      <Route exact path="/coops/:id">
        <CoopPage admin={admin} coops={coops} />
      </Route>
      <Route path="/available-chicks">
        <AvailablePage admin={admin} coops={coops} setCoops={setCoops} />
      </Route>
    </Switch>
  );
}
