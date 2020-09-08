import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, BasicUsage, LesMiserables } from "./pages";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Main</Link>
                </li>
                <li>
                  <Link to="/BasicUsage">BasicUsage</Link>
                </li>
                <li>
                  <Link to="/LesMiserables">LesMiserables</Link>
                </li>
              </ul>
            </nav>

            <Route exact path="/" component={Home} />
            <Route exact path="/BasicUsage" component={BasicUsage} />
            <Route exact path="/LesMiserables" component={LesMiserables} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
