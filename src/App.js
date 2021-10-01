import Homepage from "./components/Hompage/Homepage";
import Share from "./components/Share/Share";
import Receive from "./components/Receive/Receive";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/Share">
        <Share />
      </Route>
      <Route path="/Receive">
        <Receive />
      </Route>
    </Router>
  );
}

export default App;
