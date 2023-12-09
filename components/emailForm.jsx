'use client'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const EmailForm = ({toggleShowEmail}) => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID, 
            process.env.NEXT_PUBLIC_TEMPLATE_ID, 
            formRef.current, 
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
          .then((result) => {
              console.log("message sent", result.text);
              e.target.reset()
              toggleShowEmail()
              alert("Thank you! Your message has been sent.")
          }, (error) => {
              console.log(error.text);
              alert("We could not process your message at this time. Please email me directly at sofiatruta@gmail.com")
          });
      };

    return (
        <form className="max-w-md mx-auto mt-10" ref={formRef} onSubmit={sendEmail}>
            <div className="mb-3">
                <p className="text-xl font-bold text-center">Get in touch!</p>
            </div>
            <input type="hidden" name="contact_number" />
            <div className="mb-4">
                <label className="block text-gray-500 text-sm font-bold mb-2" >Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="user_name" type="text" name="user_name" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-500 text-sm font-bold mb-2" >Email</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user_email" type="email" name="user_email" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message"></textarea>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Send
                </button>
            </div>
            <div className="flex flex-col items-center justify-center mt-5">
                <p>or send me an email:</p>
                <a href="mailto:sofiatruta@gmail.com"><p>sofiatruta@gmail.com</p></a>
            </div>
        </form>
    );
}

export default EmailForm;