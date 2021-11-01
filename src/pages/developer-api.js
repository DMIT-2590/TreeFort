import React from 'react';
import Layout from '@theme/Layout';
import styles from './developer-api.module.css'
import HomepageHeader from '../components/HomepageHeader';

export default function DeveloperAPI() {
    return (
        <Layout
            title="Developer API"
            description="">
            <HomepageHeader />
            <main>
                <div className={styles.developerAPIContainer}>
                    <h1>Developer API</h1>
                </div>                
            </main>
        </Layout>
    );
}