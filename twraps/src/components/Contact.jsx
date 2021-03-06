import React from 'react'
import '../styles/contact.scss'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mzbypjer");
    if (state.succeeded) {
        return <div className="SuccessfulForm">
            <p>Your message has gone through successfully. We will get back to you within 1-3 bussiness days. <br /> If you would like to speak to someone sooner, please call</p>
            <a className="number" href="tel:+12086177722">(208) 617-7722</a>
            <p>Have a wonderful day!</p>
        </div>;
    }
    return (
        //id="contactform" action="https://formspree.io/mzbypjer" method="POST"
        <form onSubmit={handleSubmit} >
            <header className="contactHeader">
                <h2>Interested in working together?</h2>
                <p>Get your free quote today!</p>
            </header>
            <div className="row">
                <div className="nameAndNumber">
                    <input className="nameNumber name" id="name" type="name" name="name" placeholder="Name" required autoComplete="off" autoFocus/>
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                    <input id="number" name="number" type="tel" placeholder="(###) ###-####" className="nameNumber" autoComplete="off" />
                </div>
                <div className="emailMessage">
                    <input
                        className="subMessage email" id="email" type="email" name="email" placeholder="Email" required autoComplete="off" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <textarea id="message" type="text" name="message" placeholder="Message" className="subMessage" required autoComplete="off" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div className="buttons inp">
                    <button type="submit" disabled={state.submitting} className="btnOne">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default Contact

