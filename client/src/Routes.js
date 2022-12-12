import React from "react";
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import ApplicationForm from "./Pages/ApplicationForm";
import ApplicationList from "./Pages/ApplicationList";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/route' component={Page} /> for all the pages */}
        <Route exact path="/" element={<ApplicationForm />} />
        <Route exact path="/applicationlist" element={<ApplicationList />} />
      </Switch>
    </Router>
  );
};

export default Routes;
