import * as React from 'react';
import * as styles from './ConnectItem.module.css';
import { OpenInNew } from '@material-ui/icons';

interface Props {
    name: string;
    url: string;
    icon: string;
    className: string;
}

export const ConnectItem: React.FC<Props> = ({ name, url, icon, className }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${className}`}>
        <img src={icon} alt={`${name}-icon`} className={styles.logo} />
        <div className={styles.description}>{name}</div>
        <OpenInNew className={styles.openInNew} />
    </a>
);
