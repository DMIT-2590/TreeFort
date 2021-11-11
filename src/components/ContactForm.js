import React from 'react'
import styles from './HomepageSupportRequest.module.css'

const contactForm = () => {
  return (
    <div className={styles.container}>
    <div className={styles.contactImage}><img src="assets/svg/contact.svg" alt="" className={styles.imgCenter} /></div>
    <div className={styles.contactForm}>
      <div className={styles.formHeader}><h1>Contact Us</h1></div>
      <form className={styles.addForm}>
                        <div className={styles.nameLabel}>
                            <label>Lastname:</label>
                            <input type='text' placeholder='Lastname' className={styles.lname} />
                            <label>Firstname:</label>
                            <input type='text' placeholder='Firstname' className={styles.lname}/>
                        </div>
                        <div className={styles.otherLabel}>
                            <label>Email:</label>
                            <input type='text' placeholder='Email' />
                        
                       
                            <label>Phone:</label>
                            <input type='text' placeholder='phone' />
                        
                            <label>Message:</label>
                            <textarea type='text' placeholder='message'></textarea>
                        
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
