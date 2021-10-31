import React from "react";
import styles from './HomepagePopularItems.module.css';
import PopularItemsPanel from "./PopularItemsPanel";
import getData from "./getData";


const HomepagePopularItems = () => {
  const {data, isPending, error} = getData('/.netlify/functions/getpopularitems');
  return (
    <div className={styles.popularBackground}>
      <div className={styles.popularContainer}>
        {error && <div className="center">{error}</div>}
        {isPending && <div className="center">Loading...</div>}
        {data && <PopularItemsPanel popularItems={data} />}
      </div>
    </div>
  );
}

export default HomepagePopularItems;