import React from "react";
import styles from "./SkeletonLoadingDocs.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoadingDocs = ({items}) => {
    return (
        <div className={styles.containLoad}>
            {items.map((item) => (
                <SkeletonTheme color="#202020" highlightColor="#dcdcdc">
                    <section>
                        <Skeleton animation="wave" variant="rectangular" width={350} height={200} />
                    </section>
                </SkeletonTheme>
            ))}
        </div>
    )
}

export default SkeletonLoadingDocs;
