import React from 'react';
import Layout from '@theme/Layout';
import styles from './knowledge-base.module.css'
import HomepageHeader from '../components/HomepageHeader';
import HomepageSupportRequest from '../components/HomepageSupportRequest';
import getData from "../components/getData";
import KnowledgeBasePanel from '../components/KnowledgeBasePanel';

export default function KnowledgeBase() {
    const {data, isPending, error} = getData('/.netlify/functions/getdoctypes');
    return (
        <Layout
            title="Knowledge Base"
            description="">
            <HomepageHeader title="Search our knowledge base" cssBackgroundClass="homePageBannerOther" />
            <main>
                <div className={styles.knowledgeBaseContainer}>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className="center">Loading...</div>}
                    {data && <KnowledgeBasePanel knowledgeBase={data} />}
                </div>
            </main>
            <HomepageSupportRequest />
        </Layout>
    );
}