import React from 'react';
import Layout from '@theme/Layout';
import styles from './faqs.module.css'
import HomepageHeader from '../components/HomepageHeader';

export default function FAQs() {
    return (
        <Layout
            title="FAQs"
            description="">
            <HomepageHeader />
            <main>
                <div className={styles.FAQContainer}>
                    <h1>FAQs</h1>
                </div>                
            </main>
        </Layout>
    );
}