import React from "react";
import styles from './MainSearchBar.module.css';

const MainSearchBar = () => {
    return ( 
        <form className={styles.searchBar} name="search-form" role="search">
            <label htmlFor="searchBar" className="sr-only">Search</label>
            <input type="search" name="searchBar" id="searchBar" className={styles.searchInput} placeholder="Search our help desk here" />
        </form>
    );
}

export default MainSearchBar;