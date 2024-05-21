import { Routes, Route } from "react-router-dom";
import {
  DashboardPage,
  PageNotFound,
  Homepage,
  AboutPage,
  FooterPage,
  ClockDisplay,
} from "../Components";
import { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import Exercise4Routes from "./Exercise4Routes";

// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />

      {/* nested routes, matches on /dash/messages etc */}
      <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>

      <Route path="/about" element={<AboutPage {...props} />} />

      <Route path="/Time" element={<ClockDisplay {...props} />} />

      {/* <Route path="/Exercise4" element={<Exercise4Routes {...props} />} /> */}

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
