import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;
const getFilter = (state) => state.contacts.filter;
const getContacts = (state) => state.contacts.items;

const getContactById = createSelector(
  [(state, contactId) => contactId, getContacts],
  (contactId, contacts) => {
    return contacts.find((contact) => contact.id === contactId);
  }
);

const getContactsFiltered = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
//=============without createSelector=============
// const getContactById = (state, contactId) => {
//   const contacts = getContacts(state);
//   return contacts.find((contact) => contact.id === contactId);
// };
// const getContactsFiltered = (state) => {
//   const contacts = getContacts(state);
//   const normalizedFilter = getFilter(state).toLowerCase();
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
//=============without createSelector=============
export default {
  getLoading,
  getFilter,
  getContacts,
  getContactById,
  getContactsFiltered,
};
