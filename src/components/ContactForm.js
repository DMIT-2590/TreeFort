import React from 'react'
import styles from './HomepageSupportRequest.module.css'

const contactForm = () => {
  return (
    <div className={styles.container}>
    <div className={styles.contactImage}><img src="./static/Assets/svg/contact.svg" alt="" className={styles.imgCenter} /></div>
    <div className={styles.contactForm}>

      <form className={styles.addForm}>
                        <div className={styles.nameLabel}>
                            <label>Name:</label>
                            <input type='text' placeholder='Surname' />
                            <input type='text' placeholder='Firstname'/>
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
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                    </div>
                </div> 
  )
}

export default contactForm