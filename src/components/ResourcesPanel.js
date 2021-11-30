import React from "react";
import styles from './ResourcesPanel.module.css';
import { Link } from "react-router-dom";

const ResourcesPanel = ({resources}) => {
    return (
        <div className={styles.resourcesGrid}>
            {resources.map((resource) => (
                <div className={styles.resourcesSection}>
                    <div className={styles.resourcesContainer} key={resource._id}>
                        <div className={styles.resourcesHeader}>
                            <span className={styles.resourcesLogo}><img src={`assets/svg/${resource.resourceLogo}`} alt={resource.resourceType} /></span>
                            <span className={styles.resourcesTitle}>{resource.resourceType}</span>
                            <span className={styles.resourcesCount}>{resource.resources.data.length}</span>
                        </div>
                        <div className={styles.resourcesContent}>
                            {resource.resources.data.map((resourceItemsUrl) => (
                                <Link className={styles.resourcesLinks} to={resourceItemsUrl.url} key={resourceItemsUrl._id}>
                                    <span><img src={`assets/svg/${resource.urlLogo}`} alt={resourceItemsUrl.urlName} /></span>
                                    <span>{resourceItemsUrl.urlName}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* <div className={styles.resourcesImage}>
                        <img src="img/client_resource.svg" alt="" />
                    </div> */}
                </div>
            ))}
        </div>
    );
}

export default ResourcesPanel;