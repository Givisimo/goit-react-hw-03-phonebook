import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import ContactList from '../ContactList/ContactList';
import getFilteredContacts from '../utils/getFilteredContacts';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import contactsList from '../data/contacts';

const searchId = uuid();

const Phonebook = () => {
  const [contacts, handleContacts] = useState(contactsList);

  useEffect(() => {
    const newContacts = JSON.parse(localStorage.getItem('contacts'));
    if (!newContacts) {
      return;
    }
    handleContacts([...newContacts]);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const saveContact = contact => {
    if (contacts.find(item => item.name === contact.name)) {
      // eslint-disable-next-line no-alert
      alert(`${contact.name} is already in contacts`);
      return;
    }
    handleContacts(prevState => [...prevState, contact]);
  };

  const deleteContact = contactId => {
    handleContacts(state => state.filter(contact => contact.id !== contactId));
  };

  const [filter, handleFilter] = useState('');

  const filteredContact = getFilteredContacts(contacts, filter);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSaveContact={saveContact} />
      <h2>Contacts</h2>
      <Filter
        searchId={searchId}
        handleFilter={e => handleFilter(e.currentTarget.value)}
        filter={filter}
      />
      <ContactList contacts={filteredContact} onDelete={deleteContact} />
    </div>
  );
};

export default Phonebook;
