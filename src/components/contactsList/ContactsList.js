import React from "react";
import ContactsListItems from "../contactListItems/ContactsListItems";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import contactSelectors from "../../redux/contact/contact-selectors";
//import contactActions from "../../redux/contact/contact-actions";

const ContactsList = ({
  items,
  contacts,
  // deleteContact
}) => {
  // render() {
  //   const { contacts, deleteContact } = this.props;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {contacts.length > 0 && items.length === 0 ? (
        <h4>...Nothing Found</h4>
      ) : (
        <TransitionGroup component="ul" className="contacts-list">
          {items.map(({ id }) => (
            <CSSTransition
              key={id}
              classNames="taskList-fade"
              timeout={250}
              unmountOnExit
            >
              <ContactsListItems
                // contact={contact}
                // key={id}
                id={id}
                //deleteContact={() => deleteContact(id)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const getFilteredContact = contactSelectors.getContactsFiltered(state);
  // const { items, filter } = state.contacts;
  // const normalizedFilter = filter.toLowerCase();

  // const getFilteredContact = items.filter((contact) =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );
  // console.log("getFilteredContact", getFilteredContact);
  console.log("items", getFilteredContact);
  return {
    items: getFilteredContact,
    contacts: contactSelectors.getContacts(state),
  };
};

export default connect(mapStateToProps)(ContactsList);
