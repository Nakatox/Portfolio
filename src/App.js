import { BrowserRouter, Switch, Route , Redirect,  HashRouter } from "react-router-dom";
import Resume from "./components/Resume";
import Main from "./components/Main";
import NotFound from "./pages/NotFound"
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" exact component = {Main}></Route>
        <Route path="/" exact><Redirect to="/home" /></Route>
        <Route path="/resume" exact component = {Resume}></Route>
        <Route path="/portfolio" exact component = {Portfolio}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
