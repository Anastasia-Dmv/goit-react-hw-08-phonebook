import React from "react";
import { Route, Redirect } from "react-router-dom";
//import routes from "./utils/utils";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: MyComponent,
  token,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      token ? <MyComponent {...props} /> : <Redirect to={redirectTo} />
    }
  />
);
const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(PrivateRoute);
