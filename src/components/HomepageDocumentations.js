import React from "react";
import styles from './HomepageDocumentations.module.css';
import DocumentationsPanel from './DocumentationsPanel'
import getData from "./getData";

const HomepageDocumentations = () => {
    const {data, isPending, error} = getData('/api/gethelpdesksections');
    return (
      <div className={styles.documentationsContainer}>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && <DocumentationsPanel helpDeskSections={data} />}
      </div>
    );
  }

export default HomepageDocumentations;