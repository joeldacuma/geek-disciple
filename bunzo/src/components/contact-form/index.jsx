import React, { useState } from "react";
import Button from "../../components/shared/button";
import { 
    Form, 
    SingleInputBox, 
    Input, 
    Textarea,
    ContactMessage } from "./style";
import { handleSubmit } from "../../utils/utilities";
import { apiUrl } from "../../../config/config";
import axios from "axios";

const ContactFormBox = () => {
    let initialContactFormState = {
        username: '',
        contactNumber: '',
        email: '',
        message: ''
    };
    let initialContactFormMessage = '';
    const [ contactForm, setContactForm ] = useState(initialContactFormState);
    const [ message, setMessage ] = useState(initialContactFormMessage);
    const [ validation, setValidation ] = useState(false);
    const MESSAGE = {
        success: 'Email sent. Please wait for customer support response in your email.',
        failed: 'Please fill up all your information details.',
        abort: 'Something went wrong with email service. Please try again.'
    };

   const handleContactFormSubmit = (event) => {
    event.preventDefault();
    setValidation(false);

    if (!contactForm.username ||
        !contactForm.email ||
        !contactForm.contactNumber ||
        !contactForm.message) {
        return setMessage(MESSAGE.failed);
    }

    const body = {
        data: contactForm
    };

    axios.post(`${apiUrl}/feedbacks`, body)
    .then((result) => {
        setValidation(true);
        setMessage(MESSAGE.success);
    })
    .catch((error) => {
        setMessage(MESSAGE.abort);
    });

    };

    return (
        <Form>
            <SingleInputBox>
                <Input 
                 type="text" 
                 value={contactForm.username} 
                 name="username" 
                 placeholder="Name"
                 onChange={e => handleSubmit(setContactForm, { 
                    username: e.target.value,
                })}
                 />
            </SingleInputBox>
            <SingleInputBox>
                <Input 
                 type="email" 
                 value={contactForm.email} 
                 name="email" 
                 placeholder="Email" 
                 onChange={e => handleSubmit(setContactForm, { 
                    email: e.target.value,
                })}
                 />
            </SingleInputBox>
            <SingleInputBox>
                <Input 
                 type="tel" 
                 value={contactForm.contactNumber} 
                 name="contactNumber" 
                 placeholder="Phone"
                 onChange={e => handleSubmit(setContactForm, { 
                    contactNumber: e.target.value,
                })}
                 />
            </SingleInputBox>
            <SingleInputBox>
                <Textarea 
                 value={contactForm.message} 
                 name="message" 
                 placeholder="Massage"
                 onChange={e => handleSubmit(setContactForm, { 
                    message: e.target.value,
                })}
                 > 
                 </Textarea>
            </SingleInputBox>
            <ContactMessage>
               <span className={(validation) ? 'success-contact' : 'failure-contact'}>
                   {message}
               </span>
            </ContactMessage>
            <SingleInputBox>
                <Button onClick={handleContactFormSubmit} size="large" shape="rounded-10">
                    Send Message <i className="icofont-long-arrow-right"></i>
                </Button>
            </SingleInputBox>
        </Form>
    );
};

export default ContactFormBox;
