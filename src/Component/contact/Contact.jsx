import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import { useState } from 'react'


function Contact() {
    const [result,setResult] = useState('')

    // const sending = ()=>{
    //     setSend("Sending..")
    // }
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f33cfbdf-dcc3-44e8-988f-2aeee0a368cd");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Email Sent Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p> Feel free to React use hello  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@me.com</li>
                <li><img src={phone_icon} alt="" />+11 90002910</li>
                <li><img src={location_icon} alt="" />New York,London</li>
            </ul>

        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit} >
                <label>Your Name</label>
                <input type="text" name = 'name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Phone number' required/>
                <label >Write your message here</label>
                <textarea name="message"   rows="6" placeholder='Enter Your message' required></textarea>
                <button type='submit'className='btn dark-btn'>Submit</button>
            </form>
            <span>{result}</span>



        </div>
    </div>
  )
}

export default Contact