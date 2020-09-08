import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registrationRequest");
const registerSuccess = createAction("auth/registrationSuccess");
const registerError = createAction("auth/registrationError");

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess ");
const loginError = createAction("auth/loginError ");

const logoutRequest = createAction("auth/logOutRequest");
const logoutSuccess = createAction("auth/logOutSuccess");
const logoutError = createAction("auth/logOutError ");

const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
const getCurrentUserError = createAction("auth/getCurrentUserError");

export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
