import React from "react";
import styles from './MainSearchBar.module.css';

const MainSearchBar = () => {
    return ( 
        <form className="searchBar">
            <input type="text" name="search" id="search" placeholder="Search here" />
        </form>
    );
}

export default MainSearchBar;