import React from "react";
import Collapsible from 'react-collapsible';
import styles from './FAQPanels.module.css';

const FAQPanels = ({panels}) => {
    const handelOpenClose = () => {}
    return (
        <div className={styles.faqPanelContainer}>
            {panels.map((panel) => (
                <div className={styles.faqItemContainer} key={panel.id}>
                    <h4>{panel.question}</h4>
                    <Collapsible className={styles.trigger} trigger="press">
                        <p className={styles.faqItemAnswer}>{panel.answer}</p>
                    </Collapsible>
                </div>
            ))}
        </div>
    );
}

export default FAQPanels;