import React from "react";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import { connect } from "react-redux";

function Header({ token }) {
  return (
    <header className="navigation">
      <section className=" wrapper">
        <Navigation />
        {token && <UserMenu />}
      </section>
    </header>
  );
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(Header);
