import React from 'react';
import { ConnectItem } from '../../components/connectItem/ConnectItem';
import GitHubIcon from './assets/GitHubIcon.svg';
import InstagramIcon from './assets/InstagramIcon.svg';
import KhanAcademyIcon from './assets/KhanAcademyIcon.svg';
import LinkedInIcon from './assets/LinkedInIcon.svg';
import SnapchatIcon from './assets/SnapchatIcon.svg';
import TelegramIcon from './assets/TelegramIcon.svg';
import TreehouseIcon from './assets/TreehouseIcon.svg';
import XingIcon from './assets/XingIcon.svg';
import styles from './Connect.module.css';

export const Connect = () => (
    <div className={styles.container}>
        {[
            { name: 'GitHub', url: 'https://github.com/reichhartd', icon: GitHubIcon },
            { name: 'Instagram', url: 'https://www.instagram.com/danielreichhart/', icon: InstagramIcon },
            { name: 'Khan Academy', url: 'https://de.khanacademy.org/profile/reichhartd/', icon: KhanAcademyIcon },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/daniel-reichhart/', icon: LinkedInIcon },
            { name: 'Snapchat', url: 'https://www.snapchat.com/add/danielreichhart/', icon: SnapchatIcon },
            { name: 'Telegram', url: 'https://t.me/reichhartd/', icon: TelegramIcon },
            { name: 'Treehouse', url: 'https://teamtreehouse.com/reichhartd', icon: TreehouseIcon },
            { name: 'Xing', url: 'https://www.xing.com/profile/Daniel_Reichhart/', icon: XingIcon },
        ].map((value) => (
            <ConnectItem {...value} key={value.name} className={styles.item} />
        ))}
    </div>
);
