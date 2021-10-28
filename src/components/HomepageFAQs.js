import React from "react";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './HomepageFAQs.module.css';
import useFetch from './useFetch';
import FAQPanels from "./FAQPanels";

const HomepageFAQs = () => {
    const {data: pricing, isPendingPrice, errorPrice} = useFetch('http://localhost:8000/pricing');
    const {data: support, isPendingSupport, errorSupport} = useFetch('http://localhost:8000/support');
    const {data: returns, isPendingReturns, errorReturns} = useFetch('http://localhost:8000/returns');
    const {data: technical, isPendingTechnical, errorTechnical} = useFetch('http://localhost:8000/technical');
    const {data: license, isPendingLicense, errorLicense} = useFetch('http://localhost:8000/license');

    const LoadLinks = async () => {
        const res = await fetch('/api/getFAQs');
        const links = await res.json();
        console.log(links)
    }
    useEffect(() => {
        LoadLinks();
    }, [])
    return (
        <div className={styles.faqContainer}>
            <Tabs selectedTabClassName={styles.faqMenuItemActive}>
                <TabList className={styles.faqMenu}>
                    <Tab className={styles.faqMenuItem}>Pricing</Tab>
                    <Tab className={styles.faqMenuItem}>Support</Tab>
                    <Tab className={styles.faqMenuItem}>Return</Tab>
                    <Tab className={styles.faqMenuItem}>Technical</Tab>
                    <Tab className={styles.faqMenuItem}>License</Tab>
                </TabList>
                <TabPanel>
                    {errorPrice && <div>{errorPrice}</div>}
                    {isPendingPrice && <div>Loading...</div>}
                    {pricing && <FAQPanels panels={pricing} />}                    
                </TabPanel>
                <TabPanel>
                    {errorSupport && <div>{errorSupport}</div>}
                    {isPendingSupport && <div>Loading...</div>}
                    {support && <FAQPanels panels={support} />}
                </TabPanel>
                <TabPanel>
                    {errorReturns && <div>{errorReturns}</div>}
                    {isPendingReturns && <div>Loading...</div>}
                    {returns && <FAQPanels panels={returns} />}
                </TabPanel>
                <TabPanel>
                    {errorTechnical && <div>{errorTechnical}</div>}
                    {isPendingTechnical && <div>Loading...</div>}
                    {technical && <FAQPanels panels={technical} />}
                </TabPanel>
                <TabPanel>
                    {errorLicense && <div>{errorLicense}</div>}
                    {isPendingLicense && <div>Loading...</div>}
                    {license && <FAQPanels panels={license} />}
                </TabPanel>
            </Tabs>
        </div>
    ); 
}

export default HomepageFAQs;

//To run and test api locally: npx json-server --watch data/faqs.json --port 8000