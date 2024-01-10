import React, { useState } from 'react';
import './Contact.css';

function Contact(props) {
  const [name, setName] = useState('');
  const [email, setEmailId] = useState('');
  const [phone, setPhoneNumber] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    const Detail = {
      name: name,
      emailID: email,
      phoneNumber: phone,
    };

    props.onAddDetail(Detail);

    // Reset form fields
    setName('');
    setEmailId('');
    setPhoneNumber('');
  }

  return (
    <form className='form-container' onSubmit={submitHandler}>
      <div className='form-group'>
        <label htmlFor='name' className='label'>
          Name
        </label>
        <input
          type='text'
          id='name'
          className='input'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email' className='label'>
          Email Id
        </label>
        <input
          type='email'
          id='email'
          className='input'
          value={email}
          onChange={(event) => setEmailId(event.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='no' className='label'>
          Phone Number
        </label>
        <input
          type='number'
          id='no'
          className='input'
          value={phone}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <button className='button'>Submit</button>
    </form>
  );
}

export default Contact;