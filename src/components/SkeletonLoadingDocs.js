import React from "react";
import styles from "./SkeletonLoadingDocs.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoadingDocs = (props) => {
    return (
        <div className={styles.containLoad}>
            {props.items.map((item) => (
                <SkeletonTheme color="#202020" highlightColor="#dcdcdc" key={item}>
                    <section>
                        <Skeleton animation="wave" variant="rectangular" height={props.height} />
                    </section>
                </SkeletonTheme>
            ))}
        </div>
    )
}

export default SkeletonLoadingDocs;
