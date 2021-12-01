import React from "react";
import Collapsible from 'react-collapsible';
import Linkify from 'react-linkify';
import styles from './FAQPanels.module.css';

const FAQPanels = ({faqs}) => {
    return (
        <div>
            {faqs.map((faq) => (
                <div className={styles.faqItemContainer} key={faq._id}>
                    <h4 className={styles.faqItemQuestion}>{faq.question}</h4>
                    <Collapsible trigger="">
                        <Linkify>
                            <p className={styles.faqItemAnswer}>{faq.answer}</p>
                        </Linkify>                        
                    </Collapsible>
                </div>
            ))}
        </div>
    );
}

export default FAQPanels;