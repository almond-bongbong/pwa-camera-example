import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import Header from '../Header';
import Camera from '../../pages/Camera';
import About from '../../pages/About';

function App(): ReactElement {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.app}>
        <Header />

        <Switch>
          <Route path="/camera">
            <Camera />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
