import React from 'react';
import Layout from '@theme/Layout';
import styles from './support-request.module.css'
import HomepageHeader from '../components/HomepageHeader';
import HomepageFAQs from '../components/HomepageFAQs';

export default function SupportRequest() {
    return (
        <Layout
            title="Support Request"
            description="">
            <HomepageHeader />
            <main>
                <div className={styles.supportRequestContainer}>
                    <h1>Support Request</h1>
                </div>                
            </main>
            <HomepageFAQs />
        </Layout>
    );
}