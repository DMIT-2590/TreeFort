import React from 'react'
import styles from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactImage}>
        <img src="/assets/svg/contact.svg" alt="" className={styles.imgCenter} />
      </div>
      <div className={styles.contactForm}>
        <div className={styles.formHeader}><h1>Contact Us</h1></div>
        <form className={styles.addForm}  name="contactForm" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contactForm" />
          <div className={styles.nameLabel}>
            <div>
              <label htmlFor="lname">Last Name:</label>
              <input type='text' name="lname" id="lname" placeholder='Last Name' className={styles.lname} required />
            </div>
            <div>
              <label htmlFor="fname">First Name:</label>
              <input type='text' name="fname" id="fname" placeholder='First Name' className={styles.lname} required />
            </div>  
          </div>
          <div className={styles.otherLabel}>
            <label htmlFor="email">Email:</label>
            <input type='text' name="email" id="email" placeholder='Email' required/>
            <label htmlFor="phone">Phone:</label>
            <input type='text' name="phone" id="phone" placeholder='Phone' />
            <label htmlFor="message">Message:</label>
            <textarea type='text' name="message" id="message" placeholder='Message' required></textarea>
            <label htmlFor="myFile">Attachment:</label>
            <input type="file" name="myFile" id="myFile" />
            <input type="submit" value="Send Support Request" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
