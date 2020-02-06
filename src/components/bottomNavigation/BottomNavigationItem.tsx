import * as React from 'react';
import { SvgIconComponent } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import styles from './BottomNavigationItem.module.css';

interface Props {
    category: string;
    link: string;
    Icon: SvgIconComponent;
    IconActive: SvgIconComponent;
}

export const ButtomNavigationItem: React.FC<Props> = ({ category, link, Icon, IconActive }) => {
    const isActive = link === useLocation().pathname;
    return (
        <Link to={link} className={`${styles.children} ${isActive ? styles.active : styles.inactive}`}>
            {isActive ? <IconActive className={styles.icon} /> : <Icon className={styles.icon} />}
            <div className={styles.category}>{category}</div>
        </Link>
    );
};
