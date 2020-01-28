import React from 'react';
import classes from './App.module.css';

import Layout from './components/Layout/Layout.js';

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
