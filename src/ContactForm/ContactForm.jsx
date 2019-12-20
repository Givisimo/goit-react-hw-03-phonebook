import React, { Component } from 'react';
import uuid from 'uuid/v1';
import T from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputIds = {
    nameId: uuid(),
    numberId: uuid(),
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const newContact = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    };
    if (!this.state.name || !this.state.number) {
      alert('Name and number is required!');
      return;
    }
    // eslint-disable-next-line
    if (isNaN(this.state.number)) {
      alert('Invalid number');
      return;
    }
    this.props.onSaveContact({ ...newContact });

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { nameId, numberId } = this.inputIds;
    return (
      <form>
        <label htmlFor={nameId}>
          <h2>Name</h2>
          <input
            type="text"
            onChange={this.handleChange}
            name="name"
            value={name}
            id={nameId}
          />
        </label>
        <label htmlFor={numberId}>
          <h2>Number</h2>
          <input
            type="text"
            onChange={this.handleChange}
            name="number"
            value={number}
            id={numberId}
          />
        </label>

        <p>
          <button type="button" onClick={this.handleClick}>
            Add contact
          </button>
        </p>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSaveContact: T.func.isRequired,
};

export default ContactForm;
