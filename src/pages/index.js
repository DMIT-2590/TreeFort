import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageDocumentations from '../components/HomepageDocumentations';
import HomepageFAQs from '../components/HomepageFAQs';
import HomepagePopularItems from '../components/HomepagePopularItems';
import HomepageSupportRequest from '../components/HomepageSupportRequest';
import MainSearchBar from '../components/MainSearchBar';
import HomepageHeader from '../components/HomepageHeader';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Help Desk"
      description="TreeFort provides a completely digital process for verifying the identity of individuals, and a secure, encrypted online video conference service for lawyers...">
      <Head>
        <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=0ebd3c6b-4cc4-477e-a0bf-0a4c226458f1"> </script>
      </Head>
      <HomepageHeader title="How can we help you?" cssBackgroundClass="homePageBannerOther" />
      <main>
        <form name="contactForm" netlify netlify-honeypot="bot-field" action="/" hidden>
          <div>
            <div>
              <label htmlFor="lname">Last Name:</label>
              <input type='text' name="lname" id="lname" />
            </div>
            <div>
              <label htmlFor="fname">First Name:</label>
              <input type='text' name="fname" id="fname" />
            </div>  
          </div>
          <div className={styles.otherLabel}>
            <label htmlFor="email">Email:</label>
            <input type='text' name="email" id="email" />
            <label htmlFor="phone">Phone:</label>
            <input type='text' name="phone" id="phone" />
            <label htmlFor="message">Message:</label>
            <textarea type='text' name="message" id="message" ></textarea>
            <label htmlFor="myFile">Attachment:</label>
            <input type="file" name="myFile" id="myFile" />
          </div>
        </form>
        <HomepageDocumentations />
        <HomepagePopularItems />
        <HomepageFAQs />
        <HomepageSupportRequest />
      </main>
    </Layout>
  );
}
