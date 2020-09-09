import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../utils/utils";
import { useSelector } from "react-redux";

export default function Navigation() {
  const token = useSelector((state) => state.auth.token);
  return (
    <nav>
      <ul className="navList">
        <li>
          <NavLink
            to={routes.home}
            className="nav-link"
            activeClassName="nav-link_active "
            exact
          >
            Home
          </NavLink>
        </li>
        {token ? (
          <li>
            <NavLink
              to={routes.contacts}
              className="nav-link"
              activeClassName="nav-link_active "
              exact
            >
              Contacts
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink
                to={routes.register}
                className="nav-link"
                activeClassName="nav-link_active "
                exact
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to={routes.login}
                className="nav-link"
                activeClassName="nav-link_active"
                exact
              >
                Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
