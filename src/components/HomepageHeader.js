import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomepageHeader.module.css';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

export default function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
            <p className="hero__subtitle">How can we help you?</p>
            <DocSearch
                apiKey = "9110916aefd88fba0ab1b95c10f4d2f8"
                indexName = "TreeFort"
                appId = "J276OQO1RA"
                placeholder = "Search our help desk here"
            />
            </div>
        </header>
    );
}