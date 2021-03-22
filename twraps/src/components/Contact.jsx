import React, { useState } from 'react'
import '../styles/contact.scss'

function Contact() {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')

    // const updateField = (field, value) => {
    //     this.setState({ [field]: value })
    // }
    const [state, setState] = useState({ name: "", email: "", message: "" });

    function onChange(event) {
        const { name, value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    function clearState() {
        setState({ name: "", email: "", message: "" });
    }

    return (
        <form method="post" action="https://formspree.io/xvoglaop">
            <header className="contactHeader">
                <h2>Interested in working together?</h2>
                <p>Get your free quote today!</p>
            </header>
            <div className="row">
                <div className="nameAndEmail">
                    <input className="nameEmail name" type="text" value={state.name} name="name" id="name" placeholder="Name" autoComplete="off" onChange={onChange} />
                    <input className="nameEmail email" type="text" value={state.email} name="email" id="email" placeholder="Email" autoComplete="off" onChange={onChange} />
                </div>
                <textarea className="subMessage" value={state.message} name="message" id="message" placeholder="Message" onChange={onChange} ></textarea>

                <div className="buttons inp">
                    <input className="btnOne" type="submit" value="Send Message" />
                    <input className="clearBtn" type="reset" value="Clear Form" onClick={clearState} />
                </div>
            </div>
        </form>
    )
}
export default Contact

