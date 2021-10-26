import React from "react";
import styles from './HomepagePopularItems.module.css';
import PopularItemsPanel from "./PopularItemsPanel";
import useFetch from './useFetch';


const HomepagePopularItems = () => {
  const {data: popular, isPendingPopular, errorPopular} = useFetch('http://localhost:7000/popular');
  return (
    <div className={styles.popularContainer}>
        {errorPopular && <div>{errorPopular}</div>}
        {isPendingPopular && <div>Loading...</div>}
        {popular && <PopularItemsPanel panels={popular} />}
        {console.log(popular)}
    </div>
  );
}

export default HomepagePopularItems;

//To run and test api locally: npx json-server --watch data/popular.json --port 7000