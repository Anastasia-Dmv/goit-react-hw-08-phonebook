//import { createStore, combineReducers } from "redux";
//import { itemsReducer, filterReducer } from "./contact/contact-reducer";
import contactsReducer from "./contact/contact-reducer";
import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./auth/authReducers";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducers,
  },
});
export default store;

//=======old version, without toolkit=====
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   //   items: itemsReducer,
//   //   filter: filterReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
//=======old version=====
