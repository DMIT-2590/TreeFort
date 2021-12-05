import React from "react";
import Collapsible from 'react-collapsible';
import Linkify from 'react-linkify';
import { BsChevronDown } from "react-icons/bs";
import styles from './FAQPanels.module.css';

const FAQPanels = ({faqs}) => {
    const componentDecorator = (href, text, key) => (
        (href === "mailto:support@treefort.tech" || href === "mailto:info@treefort.tech" ?
            <a className={styles.linkifyText} href={href} key={key}>{text}</a> :
            <a className={styles.linkifyText} href={href} key={key}>here</a>
        )
    );
    return (
        <div>
            {faqs.map((faq) => (
                <div className={styles.faqItemContainer} key={faq._id}>
                    <Collapsible className={styles.faqItemQuestion} trigger={[<span>{faq.question}</span>, <span><BsChevronDown size="18px" /></span>]}>
                        <Linkify componentDecorator={componentDecorator}>
                            <p className={styles.faqItemAnswer}>{faq.answer}</p>
                        </Linkify>                        
                    </Collapsible>
                </div>
            ))}
        </div>
    );
}

export default FAQPanels;