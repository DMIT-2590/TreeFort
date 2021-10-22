import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import SearchBar from '../theme/SearchBar';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageDocumentations from '../components/HomepageDocumentations';
import HomepageFAQs from '../components/HomepageFAQs';
import HomepagePopularItems from '../components/HomepagePopularItems';
import HomepageSupportRequest from '../components/HomepageSupportRequest';
import MainSearchBar from '../components/MainSearchBar';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">How can we help you?</p>
        <MainSearchBar />
        <SearchBar />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Help Desk"
      description="TreeFort provides a completely digital process for verifying the identity of individuals, and a secure, encrypted online video conference service for lawyers...">
      <HomepageHeader />
      <main>
        <HomepageDocumentations />
        <HomepagePopularItems />
        <HomepageFAQs />
        <HomepageSupportRequest />
      </main>
    </Layout>
  );
}
