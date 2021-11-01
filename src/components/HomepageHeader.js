import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomepageHeader.module.css';
import MainSearchBar from './MainSearchBar';

export default function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
            <p className="hero__subtitle">How can we help you?</p>
            <MainSearchBar />
            </div>
        </header>
    );
}