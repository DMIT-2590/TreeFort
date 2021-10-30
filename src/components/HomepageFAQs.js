import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './HomepageFAQs.module.css';
import FAQPanels from "./FAQPanels";
import getData from "./getData";

const HomepageFAQs = () => {
    const {data, isPending, error} = getData('/.netlify/functions/getfaqs');
    const faqTypes = []
    const faqs = []
    data.map((faq) => (
        faqTypes.push(faq.faqType)
    ))
    data.map((faq) => (
        faqs.push(faq.faqs.data)
    ))
    return (
        <div className={styles.faqContainer}>
            <Tabs selectedTabClassName={styles.faqMenuItemActive}>
                <TabList className={styles.faqMenu}>
                    <Tab className={styles.faqMenuItem}>{faqTypes[0]}</Tab>
                    <Tab className={styles.faqMenuItem}>{faqTypes[1]}</Tab>
                    <Tab className={styles.faqMenuItem}>{faqTypes[2]}</Tab>
                    <Tab className={styles.faqMenuItem}>{faqTypes[3]}</Tab>
                    <Tab className={styles.faqMenuItem}>{faqTypes[4]}</Tab>
                </TabList>
                <TabPanel>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className="center">Loading...</div>}
                    {faqs[0] !== undefined && <FAQPanels faqs={faqs[0]} />}                    
                </TabPanel>
                <TabPanel>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className="center">Loading...</div>}
                    {faqs[1] !== undefined && <FAQPanels faqs={faqs[1]} />}                    
                </TabPanel>
                <TabPanel>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className="center">Loading...</div>}
                    {faqs[2] !== undefined && <FAQPanels faqs={faqs[2]} />}                    
                </TabPanel>
                <TabPanel>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className="center">Loading...</div>}
                    {faqs[3] !== undefined && <FAQPanels faqs={faqs[3]} />}                    
                </TabPanel>
                <TabPanel>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className="center">Loading...</div>}
                    {faqs[4] !== undefined && <FAQPanels faqs={faqs[4]} />}                    
                </TabPanel>
            </Tabs>
        </div>
    ); 
}

export default HomepageFAQs;

//To run and test api locally: npx json-server --watch data/faqs.json --port 8000