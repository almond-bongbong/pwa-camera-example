import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from '../Header';
import Camera from '../../pages/Camera';

function App(): ReactElement {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.app}>
        <Header />

        <Switch>
          <Route path="/camera">
            <Camera />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
