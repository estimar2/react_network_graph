import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, BasicUsage, LesMiserables, Sample } from "./pages";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <div className="header">
              <ul className="nav">
                <li>
                  <Link to="/">Main</Link>
                </li>
                <li>
                  <Link to="/BasicUsage">BasicUsage</Link>
                </li>
                <li>
                  <Link to="/LesMiserables">LesMiserables</Link>
                </li>
                <li>
                  <Link to="/Sample">Sample</Link>
                </li>
              </ul>
            </div>

            <Route exact path="/" component={Home} />
            <Route exact path="/BasicUsage" component={BasicUsage} />
            <Route exact path="/LesMiserables" component={LesMiserables} />
            <Route exact path="/Sample" component={Sample} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
