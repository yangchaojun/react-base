import React from "react";
// import TemperatureCalculator from './TemperatureCalculator'
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./pages/404";
import Home from "./pages/Home";
import Mine from "./pages/Mine";
import UCenter from "./pages/UCenter";
import ReduxDemo from "./pages/ReduxDemo"
import ReduxReactDemo from "./pages/ReduxReactDemo"
import ReduxReactDemoOptimise from "./pages/ReduxReactDemoOptimise"
import UserNum from "./pages/UserNum";

function App() {
  return (
    <div className="App">
      {/* <TemperatureCalculator /> */}
      <Router>
        <Nav />
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route exact path="/mine" component={Mine}></Route>
          <Route path="/mine/ucenter" component={UCenter}></Route>
          <Route path="/redux-demo" component={ReduxDemo}></Route>
          <Route path="/redux-react-demo" component={ReduxReactDemo}></Route>
          <Route path="/redux-react-demo-optimise" component={ReduxReactDemoOptimise}></Route>
          <Route path="/user-num" component={UserNum}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
