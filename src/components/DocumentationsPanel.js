import React from "react";
import styles from './DocumentationsPanel.module.css';
import { Link } from "react-router-dom";

const DocumentationsPanel = ({helpDeskSections}) => {
    return (
        <div className={styles.documentGrid}>
            {helpDeskSections.map((helpDeskSection) => (
                <div className={styles.documentContainer} key={helpDeskSection.id}>
                    <Link className={styles.documentHeader} to={helpDeskSection.sectionLink}>
                        <span className={styles.documentLogo}><img src={`assets/svg/${helpDeskSection.sectionLogo}`} alt={helpDeskSection.sectionName} /></span>
                        <span className={styles.documentTitle}>{helpDeskSection.sectionName}</span>
                    </Link>
                    <div className={styles.documentContent}>
                        <p>{helpDeskSection.sectionDescription}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DocumentationsPanel;