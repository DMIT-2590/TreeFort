import React from "react";
import Collapsible from 'react-collapsible';
import styles from './FAQPanels.module.css';

const FAQPanels = ({faqs}) => {
    return (
        <div>
            {faqs.map((faq) => (
                <div className={styles.faqItemContainer}>
                    <h4 className={styles.faqItemQuestion}>{faq.question}</h4>
                    <Collapsible trigger="">
                        <p className={styles.faqItemAnswer}>{faq.answer}</p>
                    </Collapsible>
                </div>
            ))}
        </div>
    );
}

export default FAQPanels;