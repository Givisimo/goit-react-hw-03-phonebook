import React, { useState } from 'react';
import uuid from 'uuid/v1';
import T from 'prop-types';

const [nameId, numberId] = [uuid(), uuid()];

const ContactForm = ({ onSaveContact }) => {
  const [name, handleName] = useState('');

  const [number, handleNumber] = useState('');

  const reset = () => {
    handleName('');
    handleNumber('');
  };

  const handleClick = () => {
    const newContact = {
      id: uuid(),
      name,
      number,
    };
    if (!name || !number) {
      alert('Name and number is required!');
      return;
    }
    // eslint-disable-next-line
    if (isNaN(number)) {
      alert('Invalid number');
      return;
    }
    onSaveContact({ ...newContact });

    reset();
  };

  return (
    <form>
      <label htmlFor={nameId}>
        <h2>Name</h2>
        <input
          type="text"
          onChange={event => handleName(event.target.value)}
          name="name"
          value={name}
          id={nameId}
        />
      </label>
      <label htmlFor={numberId}>
        <h2>Number</h2>
        <input
          type="text"
          onChange={event => handleNumber(event.target.value)}
          name="number"
          value={number}
          id={numberId}
        />
      </label>

      <p>
        <button type="button" onClick={handleClick}>
          Add contact
        </button>
      </p>
    </form>
  );
};

ContactForm.propTypes = {
  onSaveContact: T.func.isRequired,
};

export default ContactForm;
