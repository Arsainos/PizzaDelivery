import React from 'react';

import classes from './Spinner.module.css';

const spinner = (props) => (
    <div className={[classes.Loader, props.spinnerClass].join(' ')}>Loading...</div>
);

export default spinner;