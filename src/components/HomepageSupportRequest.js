import React from "react";
import styles from './HomepageSupportRequest.module.css';

const HomepageSupportRequest = () => {
    return ( 
        <div className={styles.supportRequest}>
            <h2>Didn't find what you want?</h2>
            <button className="submit-support"><span>Submit Support Request</span></button>
        </div>
    );
}

export default HomepageSupportRequest;