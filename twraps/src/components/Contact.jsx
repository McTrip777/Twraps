import React, { useState } from 'react'
import '../styles/contact.scss'

// function Contact() {
//     // const [name, setName] = useState('')
//     // const [email, setEmail] = useState('')
//     // const [message, setMessage] = useState('')

//     // const updateField = (field, value) => {
//     //     this.setState({ [field]: value })
//     // }
//     const [state, setState] = useState({ name: "", email: "", message: "" });

//     function onChange(event) {
//         const { name, value } = event.target;
//         setState(prevState => ({ ...prevState, [name]: value }));
//     }

//     function clearState() {
//         setState({ name: "", email: "", message: "" });
//     }

//     return (
//         <form method="POST" action="https://formspree.io/f/mzbypjer">
//             <header className="contactHeader">
//                 <h2>Interested in working together?</h2>
//                 <p>Get your free quote today!</p>
//             </header>
//             <div className="row">
//                 <div className="nameAndEmail">
//                     <input className="nameEmail name" type="text" value={state.name} name="name" id="name" placeholder="Name" autoComplete="off" onChange={onChange} />
//                     <input className="nameEmail email" type="text" value={state.email} name="email" id="email" placeholder="Email" autoComplete="off" onChange={onChange} />
//                 </div>
//                 <textarea className="subMessage" value={state.message} name="message" id="message" placeholder="Message" onChange={onChange} ></textarea>

//                 <div className="buttons inp">
//                     <input className="btnOne" type="submit" value="Send Message" />
//                     <input className="clearBtn" type="reset" value="Clear Form" onClick={clearState} />
//                 </div>
//             </div>
//         </form>
//     )
// }

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
        <form onSubmit={handleSubmit}>
            <header className="contactHeader">
                <h2>Interested in working together?</h2>
                <p>Get your free quote today!</p>
            </header>
            <div className="row">
                <div className="nameAndNumber">
                    <p>*</p><input className="nameNumber name" id="name" type="name" name="name" placeholder="Name" required autoComplete="off" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                    <input id="number" name="number" placeholder="(888) 888-888" className="nameNumber" autoComplete="off" />
                </div>
                <div className="emailMessage">
                    <p>*</p><input
                        className="subMessage email" id="email" type="email" name="email" placeholder="Email" required autoComplete="off" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <p>*</p><textarea id="message" name="message" placeholder="Message" className="subMessage" required autoComplete="off" />
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

