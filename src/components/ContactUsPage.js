import React from "react";
import styles from "./ContactUsPage.module.css";

const ContactUsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h2>Contact Us</h2>
      </div>
      <form className={styles.addForm} name="contact">
        <label htmlFor="name">Name</label>
        <div className={styles.nameInput}>
          <div>
            <input type="text" name="name" id="lname" placeholder="Last Name" className={styles.lname} />
          </div>
          <div>
            <input type="text" name="name" id="fname" placeholder="First Name" className={styles.fname} />
          </div>
        </div>
        <div className={styles.otherLabel}>
          <div className={styles.emailPhone}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Email" />
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" placeholder="Phone" />
          </div>
          <label htmlFor="message">Tell us how we can help?</label>
          <textarea type="text" name="message" id="message" placeholder="Message"></textarea>
          <label htmlFor="attachment">File</label>
          <input type="file" name="attachment" id="attachment" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactUsPage;
