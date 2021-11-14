import React from "react";
import styles from "./SkeletonLoadingPopular.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoadingPopular = ({items}) => {
    return (
        <div className={styles.containLoad}>
            {items.map((item) => (
                <SkeletonTheme color="#202020" highlightColor="#dcdcdc">
                    <section>
                        <Skeleton className={styles.image} animation="wave" variant="circular" width={40} height={40} />
                        <Skeleton animation="wave" variant="rectangular" width={250} height={15} count={3} />
                    </section>
                </SkeletonTheme>
            ))}
        </div>
    )
}

export default SkeletonLoadingPopular;