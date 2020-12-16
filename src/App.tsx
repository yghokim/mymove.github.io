import React from 'react';
import { MainPage } from 'components/pages/main/MainPage'
import { Chi2021Page} from 'components/pages/main/Chi2021Page'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { PrivacyPolicyMain } from 'components/pages/PrivacyPolicyMain';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div id="content">
          <Switch>
            <Route path="/privacy">
              <PrivacyPolicyMain />
            </Route>
            <Route path="/chi2021">
              <Chi2021Page/>
            </Route>

            <Route path="/">
              <MainPage />
            </Route>
          </Switch>

          <Footer />
        </div>
      </div>

    </Router>
  );
}

export default App;
