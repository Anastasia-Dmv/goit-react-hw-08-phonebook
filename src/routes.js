import routes from "./components/utils/utils";

import { lazy } from "react";

export default [
  {
    path: routes.home,
    label: "Home",
    exact: true,
    component: lazy(() => import("./views/HomeView")),
    private: false,
    restricted: false,
  },
  {
    path: routes.register,
    label: "Register",
    exact: true,
    component: lazy(() => import("./views/RegisterView")),
    private: false,
    restricted: true,
  },
  {
    path: routes.login,
    label: "Login",
    exact: false,
    component: lazy(() => import("./views/LoginView")),
    private: false,
    restricted: true,
  },
  {
    path: routes.contacts,
    label: "Contacts",
    exact: false,
    component: lazy(() => import("./components/contactForm/ContactForm")),
    private: true,
    restricted: false,
  },
];
