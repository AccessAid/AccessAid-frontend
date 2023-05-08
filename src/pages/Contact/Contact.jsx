import React from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';

import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='content-container'>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
