import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
//import contactsActions from "../../redux/contact/contact-actions";
import contactsOperation from "../../redux/contact/contactsOperation";

import contactSelectors from "../../redux/contact/contact-selectors";

class ContactForm extends Component {
  formInitialState = {
    name: "",
    number: "",
  };
  state = {
    ...this.formInitialState,
    alertMessageShow: false,
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, number } = this.state;

    const { contacts } = this.props;
    const existedContact = contacts.find((contact) => contact.name === name);
    if (existedContact) {
      this.setState({ alertMessageShow: true });
      // alert(`${name} is already in contacts`);
      return this.setState({ ...this.formInitialState });
    }
    console.log("name", name);
    this.props.onAddContact(name, number);
    this.setState({ name: "", number: "" });
  };
  toggleAlert = () => {
    this.setState({ alertMessageShow: false });
  };
  render() {
    const { name, number, alertMessageShow } = this.state;

    return (
      <section className="wrapper">
        <CSSTransition
          in={alertMessageShow}
          timeout={250}
          classNames="alertFade"
          unmountOnExit
        >
          <button className="alertMessage" onClick={this.toggleAlert}>
            <p>Contact already exists</p>
          </button>
        </CSSTransition>
        <form onSubmit={this.handleSubmit} className="form">
          <label>
            {/* Name */}
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter name"
            ></input>
          </label>
          <label>
            {/* Number */}
            <input
              className="input"
              type="tel"
              value={number}
              onChange={this.handleChange}
              name="number"
              placeholder="Enter number"
            ></input>
          </label>
          <button type="submit" className="addContact-button">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactSelectors.getContacts(state),
  filter: contactSelectors.getFilter(state),
});
const mapDispathToProps = {
  onAddContact: contactsOperation.addContact,
};
export default connect(mapStateToProps, mapDispathToProps)(ContactForm);
