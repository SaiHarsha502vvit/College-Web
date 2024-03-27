import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon  from '../../assets/mail-icon.png'
import phone_icon  from '../../assets/phone-icon.png'
import loaction_icon  from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a02df8b0-1a30-4dcf-b6f6-faeb9828c510");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("Succes")
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
        <p>Feel Free to Reach out Through Contact form or find our Conatct Information Below</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@123DSai</li>
            <li><img src={phone_icon} alt="" />+1 123-456-789</li>
            <li><img src={loaction_icon} alt="" />Contact@123DSai.dev</li>
        </ul>
      </div>
      <div className="contact-col">
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name='name' placeholder='Enter Your Name ' required/>
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
        <label>Write Your message here</label>
        <textarea name="message"  rows="6" placeholder='Enter Your message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
      </form>
      <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
