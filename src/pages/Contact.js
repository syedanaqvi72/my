import React from 'react'

function Contact() {
  return (
    <div>
      <h2 className="common-heading"> Feel free to Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.264167914624!2d74.3193695751864!3d31.461918574240805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919069964cea363%3A0xf917c39a77ed6d79!2sMaulana%20Shaukat%20Ali%20Rd%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688650864933!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <div className='container'>
        <div className='contact-form'>
          <form action="#" method="POST">
            <input type="text" name="username" placeholder='username' autoComplete='off' required />
            <input type="Email" name="Email" placeholder='Email' autoComplete='off' required />

            <textarea name="message" cols="30" rows="6" autoComplete='off' required></textarea>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
