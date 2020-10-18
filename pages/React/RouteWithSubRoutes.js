import React from "react";
import {Route} from "react-router-dom";
import PrivateRoute from './PrivateRoute';


const RouteWithSubRoutes = (route) => {
    if(route.pri){
        return <PrivateRoute {...route}/>
    }
    return (
        <Route
          path = {route.path}
          render = {props => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      );
}
export default RouteWithSubRoutes;
