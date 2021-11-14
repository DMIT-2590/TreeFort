import React from 'react';
import Layout from '@theme/Layout';
import styles from './support-request.module.css'
import HomepageFAQs from '../components/HomepageFAQs';
import ContactForm from '../components/ContactForm';

export default function SupportRequest() {
    return (
        <Layout title="Support Request" description="">
            <div className={styles.Banner}>
                <ContactForm />
            </div>
            <main>
                <HomepageFAQs />
            </main>            
        </Layout>
    );
}