import React from "react";
import styles from './PopularItemsPanel.module.css';
import { Link } from "react-router-dom";

const PopularItemsPanel = ({panels}) => {
    return (
        <div className={styles.popularItemsGrid}>
            {panels.map((panel) => (
                <div className={styles.popularItemsContainer} key={panel.id}>
                    <div className={styles.popularItemsHeader}>
                        <div className={styles.popularItemsLogo}><img src={`../../static/Assets/svg/${panel.logo}`} alt={panel.title} /></div>
                        <div className={styles.popularItemsTitle}>{panel.title}</div>
                    </div>
                    <div className={styles.popularItemsContent}>
                        {panel.links.map((link) => (
                            <Link className={styles.popularItemsLinks} to={`${link.src}`}>
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PopularItemsPanel;