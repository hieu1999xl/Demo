import React from "react";
import {  Box } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ListPage from "./page";


function ProductFeature(props) {
    const match = useRouteMatch()
  return <div>
      <Box pt={4}>
      <Switch>
          <Route path={match.url} exact component={ListPage} />
      </Switch>
      </Box>
      
  </div>;
}

export default ProductFeature;
