import React from "react";
import { connect } from "react-redux";
//import routesInfo from "../routes";
import { Route, Redirect } from "react-router-dom";
//import routes from "./utils/utils";

const PublicRoute = ({
  component: MyComponent,
  token,

  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      token && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <MyComponent {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(PublicRoute);
// && routesInfo.restricted
