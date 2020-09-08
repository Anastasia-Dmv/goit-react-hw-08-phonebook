//import actionTypes from "./contact-types";
//import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const removeContactRequest = createAction("contacts/removeRequest");
const removeContactSuccess = createAction("contacts/removeSuccess");
const removeContactError = createAction("contacts/aremoverror");

const fetchContactsRequest = createAction("contactfetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

// const addContact = createAction("contact/AddContact", (name, number) => ({
//   payload: {
//     contact: {
//       name: name,
//       number: number,
//       id: uuidv4(),
//     },
//   },
// }));
//const deleteContact = createAction("contact/Delete");
const changeFilter = createAction("contact/changeFilter");
//const saveInStorage = createAction("contact/saveInStorage");
export default {
  removeContactRequest,
  removeContactSuccess,
  removeContactError,

  addContactError,
  addContactSuccess,
  addContactRequest,
  //addContact,
  //deleteContact,
  changeFilter,
  //saveInStorage,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
};
//=============without toolkit====
// const addContact = (name, number) => ({
//   type: actionTypes.ADDCONTACT,
//   payload: {
//     contact: {
//       name: name,
//       number: number,
//       id: uuidv4(),
//     },
//   },
// });
// const deleteContact = (id) => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: {
//     id,
//   },
// });

// const changeFilter = (filter) => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: {
//     filter,
//   },
// });
