import React from "react";
import styles from './HomepagePopularItems.module.css';
import PopularItemsPanel from "./PopularItemsPanel";
import SkeletonLoadingPopular from './SkeletonLoadingPopular';
import getData from "./getData";


const HomepagePopularItems = () => {
  const {data, isPending, error} = getData('/.netlify/functions/getpopularitems');
  const loadingData = [1, 2, 3];
  return (
    <div className={styles.popularBackground}>
      <div className={styles.popularContainer}>
        {error && <div className="center">{error}</div>}
        {isPending && <div className={styles.loading}><SkeletonLoadingPopular items={loadingData} /></div>}
        {data && <PopularItemsPanel popularItems={data} />}
      </div>
    </div>
  );
}

export default HomepagePopularItems;