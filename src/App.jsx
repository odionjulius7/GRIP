import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SuperAdmin from "./pages/SuperAdmin";
import MainLayout from "./components/admin-components/MainLayoutSuper";
import AddCreator from "./pages/AddCreator";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";
import AllUsers from "./pages/AllUsers";
import ContentCreator from "./pages/ContentCreator";
import Posts from "./pages/Posts";
import User from "./pages/User";
import Post from "./pages/Post";
import ApprovedPosts from "./pages/ApprovedPosts";

import "./App.css";
function App() {
  // role = ["super", "cell-L", "liaison-O", "regional-L"]

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<SuperAdmin />} />
            <Route path="all-users" element={<AllUsers />} />
            <Route path="all-creators" element={<ContentCreator />} />
            <Route path="add-new-creator" element={<AddCreator />} />
            <Route path="posts" element={<Posts />} />
            <Route path="appoved-posts" element={<ApprovedPosts />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="user/:id" element={<User />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <Route path="/admin" element={<MainLayout />}>
          <Route
            index
            element={
              <ProtectedRoute roles={["super"]} element={<SuperAdmin />} />
            }
          />
          <Route
            path="liaison"
            element={
              <ProtectedRoute
                roles={["liaison-O"]}
                element={<LaisonOfficer />}
              />
            }
          />
          <Route
            path="region"
            element={
              <ProtectedRoute
                roles={["regional-L"]}
                element={<RegionalOfficer />}
              />
            }
          />
          <Route
            path="cell"
            element={
              <ProtectedRoute roles={["cell-L"]} element={<CellLeader />} />
            }
          />
          <Route
            path="all-report"
            element={
              <ProtectedRoute roles={["super"]} element={<DownloadReport />} />
            }
          />
          <Route
            path="download-zone-report"
            element={
              <ProtectedRoute
                roles={["regional-L"]}
                element={<DownloadRegion />}
              />
            }
          />
        </Route> */
}

{
  /* <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<SuperAdmin />} />
          <Route path="liaison" element={<LaisonOfficer />} />
          <Route path="region" element={<RegionalOfficer />} />
          <Route path="cell" element={<CellLeader />} />
          <Route path="all-report" element={<DownloadReport />} />
          <Route path="download-zone-report" element={<DownloadRegion />} />
        </Route>
      </Routes>
    </Router> */
}
