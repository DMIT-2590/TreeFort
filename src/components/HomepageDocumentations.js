import React from "react";
import styles from './HomepageDocumentations.module.css';
import DocumentationsPanel from './DocumentationsPanel'
import getData from "./getData";

const HomepageDocumentations = () => {
    const {data, isPending, error} = getData('/.netlify/functions/gethelpdesksections');
    return (
      <div className={styles.documentationsContainer}>
        {error && <div className="center">{error}</div>}
        {isPending && <div className="center">Loading...</div>}
        {data && <DocumentationsPanel helpDeskSections={data} />}
      </div>
    );
  }

export default HomepageDocumentations;