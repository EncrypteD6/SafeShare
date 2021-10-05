import Homepage from "./components/Hompage/Homepage";
import Share from "./components/Share/Share";
import Receive from "./components/Receive/Receive";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/Share">
          <Share />
        </Route>
        <Route path="/Receive">
          <Receive />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
