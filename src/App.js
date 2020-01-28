import React from 'react';

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
  return (
    <div className={classes.App}>
      <Layout>
        <div>
          <h1>Hello World!</h1>
        </div>
      </Layout>
    </div>
  );
}

export default App;
