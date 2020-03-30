import React from 'react';
import './App.scss';
import { Header } from 'components/Header';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { PrivacyPolicyMain } from 'components/pages/PrivacyPolicyMain';
import { Footer } from 'components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div id="main-wrapper">
          <div id="main">
            <Switch>
              <Route path="/privacy">
                <PrivacyPolicyMain />
              </Route>

              <Route path="/">
                <div>Home</div>
              </Route>
            </Switch>
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
