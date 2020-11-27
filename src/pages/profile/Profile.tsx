import React from 'react';
import styles from './Profile.module.css';
import ProfilePicture from './assets/ProfilePicture.jpg';
import { ProfileSection } from '../../components/profileSection/ProfileSection';

const Profile = () => (
    <div className={styles.container}>
        <img src={ProfilePicture} alt={'Profile'} className={styles.profilePicture} />
        <div>Daniel Reichhart</div>

        <ProfileSection heading={'About'} className={styles.item}>
            <div>Frontend developer with enthusiasm for performance, reliability and clean code.</div>
        </ProfileSection>

        <ProfileSection heading={'Working experience'} className={styles.item}>
            <div>{'//Slash_'}</div>
            <div>MMS</div>
        </ProfileSection>

        <ProfileSection heading={'Education'} className={styles.item}>
            <div>CODE</div>
            <div>FOS</div>
        </ProfileSection>

        <ProfileSection heading={'Skills'} className={styles.item}>
            <div>React</div>
            <div>TypeScript</div>
            <div>Node.js</div>
            <div>GraphQL</div>
        </ProfileSection>
    </div>
);

export default Profile;
