import React from 'react';
import { Route, Switch } from 'react-router-dom';

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

const asyncPromotionsPage = asyncComponent(() => {
  return import ('./containers/Promotions/Promotion.js');
})

function App() {
  let routes = (
    <Switch>
      <Route path="/promotions" component={asyncPromotionsPage} />
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
