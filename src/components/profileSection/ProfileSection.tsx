import React from 'react';
import styles from './ProfileSection.module.css';

interface Props {
    heading: string;
    className: string;
}

export const ProfileSection: React.FC<Props> = ({ heading, className, children }) => (
    <div className={`${styles.container} ${className}`}>
        <div className={styles.heading}>{heading}</div>
        {children}
    </div>
);
