import React from 'react';
import {Redirect,Route} from 'react-router-dom'

//PrivateRoute
function PrivateRoute({ component: Com,routes, ...rest }) {
	return (
		<Route
			{ ...rest }
			render={ ({ location }) =>
				localStorage.getItem('userinfo')
					? <Com routes={routes}/>
					: (
						<Redirect
							to={ {
								pathname: "/login",
								state: location
							} }
						/>
					)
			}
		/>
	);
}

export default PrivateRoute;