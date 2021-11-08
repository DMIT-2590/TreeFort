import React from 'react';
import Layout from '@theme/Layout';
import styles from './support-request.module.css'
import HomepageHeader from '../components/HomepageHeader';
import HomepageFAQs from '../components/HomepageFAQs';
import ContactForm from '../components/ContactForm';

export default function SupportRequest() {
    return (
        <Layout title="Support Request" description="">
            
            <div className={styles.Banner}>
            <ContactForm />
            </div>
            
            <main>
                <div className={styles.supportRequestContainer}>
                    <h1>Support Request</h1>
                </div>                
            </main>
            <HomepageFAQs />
        </Layout>
    );
}