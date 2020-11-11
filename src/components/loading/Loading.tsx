import * as React from 'react';
import * as styles from './Loading.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loading = (
    <div className={styles.container}>
        <CircularProgress className={styles.spinner} color={'inherit'} />
    </div>
);
