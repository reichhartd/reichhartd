import * as React from 'react';
import { ButtomNavigationItem } from './BottomNavigationItem';
import {
    AccountTree,
    AccountTreeOutlined,
    Person,
    PersonOutlined,
    ContactMail,
    ContactMailOutlined,
} from '@material-ui/icons';
import styles from './BottomNavigation.module.css';

export const ButtomNavigation: React.FC = () => (
    <div className={styles.container}>
        <ButtomNavigationItem
            category={'Projects'}
            link="/projects"
            Icon={AccountTreeOutlined}
            IconActive={AccountTree}
        />
        <ButtomNavigationItem category={'Person'} link="/person" Icon={PersonOutlined} IconActive={Person} />
        <ButtomNavigationItem
            category={'Connect'}
            link="/connect"
            Icon={ContactMailOutlined}
            IconActive={ContactMail}
        />
    </div>
);
