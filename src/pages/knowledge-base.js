import React from 'react';
import Layout from '@theme/Layout';
import styles from './knowledge-base.module.css'
import HomepageHeader from '../components/HomepageHeader';
import HomepageSupportRequest from '../components/HomepageSupportRequest';

export default function KnowledgeBase() {
    return (
        <Layout
            title="Knowledge Base"
            description="">
            <HomepageHeader />
            <main>
                <div className={styles.knowledgeBaseContainer}>
                    <h1>Knowledge Base</h1>
                </div>                
            </main>
            <HomepageSupportRequest />
        </Layout>
    );
}