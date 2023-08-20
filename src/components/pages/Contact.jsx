import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState('');

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    const submit = () => {
        if (name && email && message) {

            if (!isValidEmail) {
                alert('Must submit a valid email.');
            } else {

                const serviceId = 'service_nbupdfl';
                const templateId = 'template_kqbmo5g';
                const userId = '9S11CsFtiBx_aYJtu';
                const templateParams = {
                    name,
                    email,
                    message
                };

                emailjs.send(serviceId, templateId, templateParams, userId)
                    .then(response => console.log(response))
                    .then(error => console.log(error));

                setName('');
                setEmail('');
                setMessage('');
                setEmailSent(true);   
            }     
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div className="min-h-screen">
            <div className="bg-cyan-400 p-10 w-full max-w-xs mx-auto text-black rounded-xl my-4">
                <div id="contact-form rounded py-10">
                    <label>Want to contact me?</label>
                    <input className="my-2 rounded p-2 text-white" type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                    <input className="my-2 rounded p-2 text-white" type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                    <textarea className="my-2 rounded p-2 text-white" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    <button className="border-black border-2 rounded p-1 bg-cyan-200 hover:bg-cyan-600 font-bold" onClick={submit}>Send Message</button>
                </div>
            </div>
        </div>
    )
}