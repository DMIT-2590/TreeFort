import React from "react";
import styles from './DocumentationsPanel.module.css';
import { Link } from "react-router-dom";

const DocumentationsPanel = ({helpDeskSections}) => {
    return (
        <div className={styles.documentGrid}>
            {helpDeskSections.map((helpDeskSection) => (
                <div className={styles.documentContainer} key={helpDeskSection.id}>
                    <div className={styles.documentHeader}>
                        <span className={styles.documentLogo}><img src={`static/img/${helpDeskSection.sectionLogo}`} alt={helpDeskSection.sectionName} /></span>
                        <span className={styles.documentTitle}>{helpDeskSection.sectionName}</span>
                        <span className={styles.documentCount}>{helpDeskSection.helpDeskSectionIntroLinks.data.length}</span>
                    </div>
                    <div className={styles.documentContent}>
                        {helpDeskSection.helpDeskSectionIntroLinks.data.map((sectionIntroLink) => (
                            <Link className={styles.documentationLinks} to={`#`}>
                                <span><img src={`static/img/${helpDeskSection.sectionUrlLogo}`} alt={sectionIntroLink.url} /></span>
                                <span>{sectionIntroLink.url}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DocumentationsPanel;