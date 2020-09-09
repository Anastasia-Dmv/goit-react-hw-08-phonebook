import React, { Component } from "react";
//import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
//import contactsOperations from "../../redux/contact/contact-actions";

import MainTitle from "../mainTitle/MainTitle";
import ContactForm from "../contactForm/ContactForm";
import FindContactInput from "../findContactInput/FindContactInput";
import ContactsList from "../contactsList/ContactsList";
import { CSSTransition } from "react-transition-group";
import contactsOperation from "../../redux/contact/contactsOperation";
import contactSelectors from "../../redux/contact/contact-selectors";

//import contactActions from "../../redux/contact/contact-actions";
//import { items } from "../../redux/contact/contact-reducer";

class Phonebook extends Component {
  state = {
    showContacts: false,
  };
  componentDidMount() {
    this.props.onFetchContacts();
  }
  componentDidUpdate(prevProps, nextProps) {
    console.log("prevProps", prevProps);
    console.log("nextProps", nextProps);
  }
  // componentDidMount() {
  //   const persistedContacts = localStorage.getItem("contacts");
  //   if (persistedContacts) {
  //     console.log("persistedContacts", persistedContacts);
  //     this.props.saveInStorage(JSON.parse(persistedContacts));
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.contacts !== this.props.contacts) {
  //     console.log("this.props.contacts", this.props.contacts);
  //     localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
  //   }
  // }
  // addContact = (name, number) => {
  //   const contact = {
  //     name: name,
  //     number: number,
  //     id: uuidv4(),
  //   };

  //   this.setState((prevState) => {
  //     return {
  //       contacts: [...prevState.contacts, contact],
  //       showContacts: true,
  //     };
  //   });
  // };
  // changeFilter = (filter) => {
  //   this.setState({ filter });
  // };

  // getFilteredContacts = () => {
  //   const { contacts, filter } = this.state;

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };
  // handleDelete = (id) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter((contact) => contact.id !== id),
  //   }));
  // };

  render() {
    //const { filter, contacts } = this.state;

    //const filteredContacts = this.getFilteredContacts();
    // const { IsLoadingContacts } = this.props;
    return (
      <div className="container ">
        <CSSTransition
          in={true}
          appear={true}
          classNames="mainTitle-slideIn"
          timeout={5000}
          unmountOnExit
        >
          <MainTitle />
        </CSSTransition>

        <ContactForm
        // addContact={this.addContact}
        // contacts={this.state.contacts}
        />

        {/* {this.props.filteredContacts && ( */}
        <CSSTransition
          in={
            this.props.filteredContacts.length > 1 ||
            this.props.contacts.length > 1
          }
          timeout={250}
          classNames="findContact"
          unmountOnExit
        >
          {/* {this.props.contacts > 0 && ( */}
          <FindContactInput
          // value={this.props.filter}
          // onChangeFilter={this.changeFilter}
          />
          {/* )} */}
        </CSSTransition>
        {/* )} */}
        {/* <CSSTransition in={showContacts} inmountOnExit> */}
        {/* {this.state.contacts && ( */}
        {/* {this.props.filteredContacts === [] ? (
          <h4>...There is no result</h4>
        ) : ( */}
        <ContactsList
        // deleteContact={this.handleDelete} contacts={contacts}
        />
        {/* )} */}
        {this.props.IsLoadingContacts && (
          <Loader
            style={{ display: "flex ", justifyContent: "center" }}
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
          />
        )}
        {/* )} */}
        {/* </CSSTransition> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state);
  const { items, filter } = state.contacts;

  const getfilteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return {
    filteredContacts: getfilteredContacts,
    IsLoadingContacts: contactSelectors.getLoading(state),
    filter: contactSelectors.getFilter(state),
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = {
  onFetchContacts: contactsOperation.fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
//export default App;
