//import {combineReducers} from  'redux';
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import authActions from "./authActions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload,
  [authActions.loginSuccess]: (_, { payload }) => payload,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: (_, { payload }) => payload,
});

export default combineReducers({ user, token, error });
