import React from "react";
import Collapsible from 'react-collapsible';
import styles from './FAQPanels.module.css';

const FAQPanels = ({panels}) => {
    return (
        <div>
            {panels.map((panel) => (
                <div className={styles.faqItemContainer} key={panel.id}>
                    <h4 className={styles.faqItemQuestion}>{panel.question}</h4>
                    <Collapsible trigger="">
                        <p className={styles.faqItemAnswer}>{panel.answer}</p>
                    </Collapsible>
                </div>
            ))}
        </div>
    );
}

export default FAQPanels;