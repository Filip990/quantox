import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import GlobalStyles from './GlobalStyles';

import Cards from "./components/Cards/Cards";
import CardEdit from "./components/CardEdit/CardEdit";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/cards">
        <Cards />
      </Route>
      <Route path={["/cards/add", "/cards/:id/edit"]}>
        <CardEdit />
      </Route>
      <Route>
        <Redirect to="/cards" />
      </Route>
    </Switch>
    <GlobalStyles />
  </Router>
)

export default App;
