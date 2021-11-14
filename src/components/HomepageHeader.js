import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from "react";
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomepageHeader.module.css';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

export default function HomepageHeader(props) {
    const {siteConfig} = useDocusaurusContext();
    const ChangeDocSearchText = () => {
        let searchBarNode = document.querySelector(".main-wrapper button.DocSearch .DocSearch-Button-Placeholder");
        let searchBarElement = ReactDOM.findDOMNode(searchBarNode);
        searchBarElement.innerHTML = "Search by typing your question or keyword";
    }
    useEffect(() => {
        ChangeDocSearchText();
    })
    return (
        <header className={clsx(styles.heroBanner, props.cssBackgroundClass)}>
            <div className="container">
            <p className="hero__subtitle">{props.title}</p>
            <DocSearch
                apiKey = "9110916aefd88fba0ab1b95c10f4d2f8"
                indexName = "TreeFort"
                appId = "J276OQO1RA"
                placeholder = "Search our help desk here"
            />
            </div>
        </header>
    );
}