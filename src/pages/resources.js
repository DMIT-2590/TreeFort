import React from 'react';
import Layout from '@theme/Layout';
import styles from './resources.module.css'
import HomepageHeader from '../components/HomepageHeader';

export default function Resources() {
    return (
        <Layout
            title="Resources"
            description="">
            <HomepageHeader />
            <main>
                <div className={styles.resourcesContainer}>
                    <h1>Resources</h1>
                </div>                
            </main>
        </Layout>
    );
}