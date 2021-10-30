import React from "react";
import styles from './HomepagePopularItems.module.css';
import PopularItemsPanel from "./PopularItemsPanel";
import getData from "./getData";


const HomepagePopularItems = () => {
  const {data, isPending, error} = getData('/api/getpopularitems');
  return (
    <div className={styles.popularContainer}>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && <PopularItemsPanel popularItems={data} />}
    </div>
  );
}

export default HomepagePopularItems;