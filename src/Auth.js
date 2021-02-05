// import React from "react";
// import { Redirect, Route, useLocation } from "react-router-dom";
// import { fakeAuth } from "./components/Login/Login";
//
// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const location = useLocation();
//
//     return (
//         <Route {...rest}>
//             {fakeAuth.isAuthenticated === true ?
//                 <Component />
//             :
//                 <Redirect to={{pathname: "/login", state: { from: location}}}/>
//             }
//         </Route>
//     )
// }
//
// export default PrivateRoute;