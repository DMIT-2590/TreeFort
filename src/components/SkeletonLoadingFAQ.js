import React from "react";
import styles from "./SkeletonLoadingFAQ.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoadingFAQ = ({items}) => {
    return (
        <div className={styles.containLoad}>
            {items.map((item) => (
                <SkeletonTheme color="#202020" highlightColor="#dcdcdc">
                    <section>
                        <Skeleton animation="wave" variant="rectangular" height={15} />
                    </section>
                </SkeletonTheme>
            ))}
        </div>
    )
}

export default SkeletonLoadingFAQ;