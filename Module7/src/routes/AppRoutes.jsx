import { Routes, Route } from "react-router-dom";
import {
  DashboardPage,
  PageNotFound,
  Homepage,
  AboutPage,
  FooterPage,
  ClockDisplay,
  LoginForm,
  MUIDisplayPage,
} from "../Components";
import { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import Exercise4Routes from "./Exercise4Routes";
import PostsPage, { Post, PostList } from "../pages/PostsPage";
import ProtectedRoute from "./ProtectedRoute";

// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />

      {/* nested routes, matches on /dash/messages etc */}
      <Route
        path="dash"
        element={
          <ProtectedRoute>
            <DashboardPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="login" element={<LoginForm />} />

      <Route path="/about" element={<AboutPage {...props} />} />

      <Route path="/Time" element={<ClockDisplay {...props} />} />

      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        {/* dynamic param taken from route, stored in variable called id */}
        <Route path=":id" element={<Post />} />
      </Route>

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />

      <Route path="/MUI" element={<MUIDisplayPage {...props} />} />
    </Routes>
  );
}

export default AppRoutes;
