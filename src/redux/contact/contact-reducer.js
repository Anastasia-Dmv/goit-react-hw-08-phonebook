import { combineReducers } from "redux";
//import actionTypes from "./contact-types";
import actionTypes from "./contact-actions";
//import contactsActions from "../contactsOperations/contactsOperation";
import { createReducer } from "@reduxjs/toolkit";
//import contactsOperation from "../../components/contactsOperations/contactsOperation";

const items = createReducer([], {
  [actionTypes.fetchContactsSuccess]: (state, action) => action.payload,
  [actionTypes.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [actionTypes.removeContactSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  //[actionTypes.saveInStorage]: (state, action) => action.payload,
});

const filter = createReducer("", {
  [actionTypes.changeFilter]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [actionTypes.addContactRequest]: () => true,
  [actionTypes.addContactSuccess]: () => false,
  [actionTypes.addContactError]: () => false,
  [actionTypes.removeContactRequest]: () => true,
  [actionTypes.removeContactSuccess]: () => false,
  [actionTypes.removeContactError]: () => false,
});
// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
// export const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.addContact.type:
//       return [...state, payload.contact];
//     case actionTypes.deleteContact.type:
//       return state.filter((contact) => contact.id !== payload);
//     default:
//       return state;
//   }
// };
// export const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case actionTypes.changeFilter.type:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
  loading,
});
