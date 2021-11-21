import React from "react";
import styles from './HomepageDocumentations.module.css';
import DocumentationsPanel from './DocumentationsPanel';
import SkeletonLoadingDocs from './SkeletonLoadingDocs';
import getData from "./getData";

const HomepageDocumentations = () => {
    const {data, isPending, error} = getData('/.netlify/functions/gethelpdesksections');
    const loadingData = [1, 2, 3, 4, 5];
    return (
      <div className={styles.documentationsContainer}>
        {error && <div className="center">{error}</div>}
        {isPending && <div className={styles.loading}><SkeletonLoadingDocs items={loadingData} height={320} /></div>}
        {data && <DocumentationsPanel helpDeskSections={data} />}
      </div>
    );
  }

export default HomepageDocumentations;