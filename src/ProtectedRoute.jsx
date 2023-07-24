import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const location = useLocation();
  const userData = useSelector((state) => state.auth.user);

  const isAuthenticated = userData.email;

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   // Check if user is authenticated (e.g., by checking a stored token)
//   const isAuthenticated = checkUserAuthentication();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default PrivateRoute;

// {
//   /* <Route exact path="/" element={<ProtectedRoute />}>
//   <Route path="/admin-a" element={<AdminA />}>
//     {userRole === 'admin' && (
//       <>
//         <Route path="/admin-a/aCanAccess" element={<AdminLists />} />
//         <Route path="/admin-a/anotherPage" element={<AnotherAdminPage />} />
//       </>
//     )}
//   </Route>
//   <Route path="/admin-a" element={<AdminA />}>
//     {userRole === 'student' && (
//       <>
//         <Route path="/admin-a/aCanAccess" element={<StudentLists />} />
//         <Route path="/admin-a/anotherPage" element={<AnotherStudentPage />} />
//       </>
//     )}
//   </Route>
// </Route> */
// }
