import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../utils/utils";

export default function Navigation() {
  return (
    <>
      <NavLink to={routes.home} exact>
        Home
      </NavLink>

      <NavLink to={routes.contacts} exact>
        Contacts
      </NavLink>
    </>
  );
}
