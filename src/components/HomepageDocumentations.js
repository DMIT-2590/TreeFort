import React from "react";
import styles from './HomepageDocumentations.module.css';
import DocumentationsPanel from './DocumentationsPanel'
import useFetch from './useFetch';

const HomepageDocumentations = () => {
    const {data: documentations, isPendingDocumentations, errorDocumentations} = useFetch('http://localhost:9000/documentations');
    return (
      <div className={styles.documentationsContainer}>
        {errorDocumentations && <div>{errorDocumentations}</div>}
        {isPendingDocumentations && <div>Loading...</div>}
        {documentations && <DocumentationsPanel panels={documentations} />}
        {console.log(documentations)}
      </div>
    );
  }

export default HomepageDocumentations;

//To run and test api locally: npx json-server --watch data/documentations.json --port 9000