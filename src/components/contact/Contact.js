import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
    const [state, handleSubmit] = useForm("mnqwaklz");
    if (state.succeeded) {
        return <p>Thanks for your email!</p>;
    }
    return (
        <div id="contact">
            <h3 className="text-danger text-center mt-5 fs-2">Contact me</h3>

            <div >
                <div className="text-center">
                    <h5>Phone:<span>01626892820</span></h5>
                    <h5>Email:<span>mazedaaktershathi@gmail.com</span></h5>
                </div>
                <h6 className="text-center mt-5">Email me with questions.I would be happy to answer your questions ans set up a meeting with you.</h6>
                <form onSubmit={handleSubmit} className="text-center ">
                    <input
                        placeholder="Name"
                        id="name"
                        name="name"
                        className="w-50 "

                    />
                    <br />
                    <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors}
                    />
                    <br />

                    <input
                        placeholder="email address"
                        id="email"
                        type="email"
                        name="email"
                        className=" w-50"
                    />
                    <br />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                        className="m-3 w-50 "
                        placeholder="Your message"
                    />
                    <br />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button className="resume" type="submit" disabled={state.submitting}>
                        Send Email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;