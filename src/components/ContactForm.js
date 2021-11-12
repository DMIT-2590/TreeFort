import React from 'react'
import styles from './ContactForm.module.css'

const contactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactImage}>
        <img src="assets/svg/contact.svg" alt="" className={styles.imgCenter} />
      </div>
      <div className={styles.contactForm}>
        <div className={styles.formHeader}><h1>Contact Us</h1></div>
        <form className={styles.addForm} action="mailto:support@treefort.tech">
          <div className={styles.nameLabel}>
            <div>
              <label>Lastname:</label>
              <input type='text' placeholder='Lastname' className={styles.lname} />
            </div>
            <div>
              <label>Firstname:</label>
              <input type='text' placeholder='Firstname' className={styles.lname} />
            </div>  
          </div>
          <div className={styles.otherLabel}>
            <label>Email:</label>
            <input type='text' placeholder='Email' />


            <label>Phone:</label>
            <input type='text' placeholder='Phone' />

            <label>Message:</label>
            <textarea type='text' placeholder='Message'></textarea>

            <label>Attachment:</label>
            <input type="file" id="myfile" name="myfile" />
            <input type="submit" value="Send Support Request" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default contactForm
