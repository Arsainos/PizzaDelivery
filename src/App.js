import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// import styles
import classes from './App.module.css';

// import components
import Layout from './components/Layout/Layout.js';

// import hocs
import asyncComponent from './hocs/asyncComponent/asyncComponent.js';

// import async containers
const asyncMainPage = asyncComponent(() => {
  return import ('./containers/MainPage/MainPage.js');
});

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={asyncMainPage} />
    </Switch>
  );

  return (
    <div className={classes.App}>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default App;
