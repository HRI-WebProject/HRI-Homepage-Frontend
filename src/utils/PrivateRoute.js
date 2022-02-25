import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAdmin from "./isAdmin";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) => {
        !isAdmin() &&
          alert("You don't have access. Please log in and try again.");
        return isAdmin() ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
