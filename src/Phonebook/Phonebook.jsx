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
// class Phonebook extends Component {
//   state = {
//     contacts: [...contactsList],
//     filter: '',
//   };
//
//   inputIds = {
//     nameId: uuid(),
//     numberId: uuid(),
//     searchId: uuid(),
//   };
//
//   componentDidMount() {
//     const contactsFromStorage = JSON.parse(localStorage.getItem('contacts'));
//     if (!contactsFromStorage) {
//       return;
//     }
//     this.setState({ contacts: [...contactsFromStorage] });
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }
//
//   handleFilter = e => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };
//
//   saveContact = contact => {
//     if (this.state.contacts.find(item => item.name === contact.name)) {
//       // eslint-disable-next-line no-alert
//       alert(`${contact.name} is already in contacts`);
//       return;
//     }
//     this.setState(state => ({ contacts: [...state.contacts, contact] }));
//   };
//
//   deleteContact = contactId => {
//     this.setState(state => ({
//       contacts: state.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };
//
//   render() {
//     const { contacts, filter } = this.state;
//     const { searchId } = this.inputIds;
//
//     const filteredContact = getFilteredContacts(contacts, filter);
//
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSaveContact={this.saveContact} />
//         <h2>Contacts</h2>
//         <Filter
//           searchId={searchId}
//           handleFilter={this.handleFilter}
//           filter={filter}
//         />
//         <ContactList contacts={filteredContact} onDelete={this.deleteContact} />
//       </div>
//     );
//   }
// }

export default Phonebook;
