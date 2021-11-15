import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import styles from './HomepageSupportRequest.module.css';

const HomepageSupportRequest = () => {
    const handleMouseEnter = () => {
        let svgNode = document.querySelector("button.submit-support span:last-child svg");
        let svgElement = ReactDOM.findDOMNode(svgNode);
        svgElement.style.opacity = "1";
        svgElement.style.marginLeft = "12px";
    }
    const handleMouseLeave = () => {
        let svgNode = document.querySelector("button.submit-support span:last-child svg");
        let svgElement = ReactDOM.findDOMNode(svgNode);
        svgElement.style.opacity = "0";
        svgElement.style.marginLeft = "-12px";
    }
    return ( 
        <div className={styles.supportRequest}>
            <h2>Didn't find what you want?</h2>
            <Link to="/support-request">
                <button className="submit-support" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <span>Submit Support Request</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                    </span>
                </button>
            </Link>
        </div>
    );
}

export default HomepageSupportRequest;