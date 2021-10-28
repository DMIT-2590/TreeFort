import React from "react";
import styles from './DocumentationsPanel.module.css';
import { Link } from "react-router-dom";

const DocumentationsPanel = ({panels}) => {
    return (
        <div className={styles.documentGrid}>
            {panels.map((panel) => (
                <div className={styles.documentContainer} key={panel.id}>
                    <div className={styles.documentHeader}>
                        <span className={styles.documentLogo}><img src={`/static/Assets/svg/${panel.logo}`} alt={panel.title} /></span>
                        <span className={styles.documentTitle}>{panel.title}</span>
                        <span className={styles.documentCount}>{panel.documentLinks.length}</span>
                    </div>
                    <div className={styles.documentContent}>
                        {panel.documentLinks.map((documentLink) => (
                            <Link className={styles.documentationLinks} to={`#`}>
                                <span><img src={`/static/Assets/svg/${documentLink.icon}`} alt={documentLink.link} /></span>
                                <span>{documentLink.link}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DocumentationsPanel;