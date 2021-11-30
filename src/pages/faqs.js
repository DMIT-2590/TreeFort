import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@theme/Layout';
import styles from './faqs.module.css'
import HomepageHeader from '../components/HomepageHeader';
import HomepageFAQs from '../components/HomepageFAQs';
import HomepageSupportRequest from '../components/HomepageSupportRequest';

export default function FAQs() {
    return (
        <Layout
            title="FAQs"
            description="">
            <HomepageHeader title="View our most frequently asked questions here" cssBackgroundClass="homePageBanner" />
            <main>
                <div className={styles.FAQContainer}>
                <HomepageFAQs />
                    <div className={styles.additionalHelpGrid}>
                        <Link className={styles.forgotAccountInfo} to="/docs/account-setup-and-management/forgot-account-number-or-password/">
                            <img src="assets/svg/account-setup.svg" alt="Account Setup" />
                            <h5>Forgot Account Number or Password</h5>
                        </Link>
                        <Link className={styles.verification} to="/docs/getting-started/the-id-verification-process">
                            <img src="assets/svg/manage-your-organization.svg" alt="ID Verification" />
                            <h5>The ID Verification Progress</h5>
                        </Link>
                        <Link className={styles.identifyRisks} to="/docs/resources/identified-risks-quick-reference">
                            <img src="assets/svg/resources.svg" alt="Risks Quick Reference" />
                            <h5>Identified Risks Quick Reference</h5>
                        </Link>
                        <Link className={styles.manageFiles} to="/docs/getting-started/understanding-the-treefort-report">
                            <img src="assets/svg/doc.svg" alt="The TreeFort Report" />
                            <h5>Understanding the TreeFort Report</h5>
                        </Link>
                        <Link className={styles.resources} to="/resources">
                            <img src="assets/svg/knowledge-base.svg" alt="Resources" />
                            <h5>Resources</h5>
                        </Link>
                        <Link className={styles.apiDocs} to="https://treefort-api.readme.io/reference/getting-started-with-your-api">
                            <img src="assets/svg/developer-api.svg" alt="API Documentation" />
                            <h5>API Documentation</h5>
                        </Link>
                    </div>
                </div>                
            </main>
            <HomepageSupportRequest />
        </Layout>
    );
}