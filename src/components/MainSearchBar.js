import React from "react";
import styles from './MainSearchBar.module.css';

const MainSearchBar = () => {
    return ( 
        <form className={styles.searchBar} name="search-form" role="search">
            <label htmlFor="searchBar" className="sr-only">Search</label>
            <input type="search" name="searchBar" id="searchBar" className={styles.searchInput} placeholder="Search by typing your question or keyword" />
        </form>
    );
}

export default MainSearchBar;