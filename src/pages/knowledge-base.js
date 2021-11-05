import React from 'react';
import Layout from '@theme/Layout';
import styles from './knowledge-base.module.css'
import HomepageHeader from '../components/HomepageHeader';
import HomepageSupportRequest from '../components/HomepageSupportRequest';
import getData from "../components/getData";
import DocumentationsPanel from '../components/DocumentationsPanel'

export default function KnowledgeBase() {
    const { data, isPending, error } = getData('http://localhost:3000/knowledgeBase');
    console.log(data)
    return (
        <Layout
            title="Knowledge Base"
            description="">
            <HomepageHeader />
            <main>
                <div className={styles.knowledgeBaseContainer}>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className="center">Loading...</div>}
                    {data && <DocumentationsPanel helpDeskSections={data} />}
                </div>
            </main>
            <HomepageSupportRequest />
        </Layout>
    );
}