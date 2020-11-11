import * as React from 'react';
import { ButtomNavigationItem } from './BottomNavigationItem';
import AccountTree from '@material-ui/icons/AccountTree';
import AccountTreeOutlined from '@material-ui/icons/AccountTreeOutlined';
import Person from '@material-ui/icons/Person';
import PersonOutlined from '@material-ui/icons/PersonOutlined';
import ContactMail from '@material-ui/icons/ContactMail';
import ContactMailOutlined from '@material-ui/icons/ContactMailOutlined';
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
