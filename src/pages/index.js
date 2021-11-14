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
      <HomepageHeader title="How can we help you?" cssBackgroundClass="homePageBanner" />
      <main>
        <HomepageDocumentations />
        <HomepagePopularItems />
        <HomepageFAQs />
        <HomepageSupportRequest />
      </main>
    </Layout>
  );
}
