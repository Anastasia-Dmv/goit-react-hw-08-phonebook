//import { createStore, combineReducers } from "redux";
//import { itemsReducer, filterReducer } from "./contact/contact-reducer";
import contactsReducer from "./contact/contact-reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducers from "./auth/authReducers";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
  }),
  // logger,
];
const persistToken = {
  key: "token",
  storage,
  whitelist: ["token"],
};
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(persistToken, authReducers),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

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
