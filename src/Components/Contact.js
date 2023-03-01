import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-parent'>
      <h1>Contact Us</h1>
      <div className='contact-div'>
        <form className='contact-div'>
          <label for="contact-name">Name *</label>
          <input type="text" name="name" id="contact-name" placeholder='Enter your full name' required /><br></br>
          <label for="contact-email">Email *</label>
          <input type="email" name="email" id="contact-email" placeholder='Enter a valid email address' required /><br></br>
          <label for="contact-no">Contact No.</label>
          <input type="number" name="phno" min={1000000000} max={9999999999} placeholder = 'Enter a valid contact number' id="contact-no" /><br></br>
          <label for="contact-msg">Write a message *</label>
          <textarea rows="10" cols="10" id="contact-msg" placeholder='Write your query here' required></textarea><br></br>
          <button id = "contact-submit">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Contact