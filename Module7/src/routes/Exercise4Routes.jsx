import { Routes, Route } from "react-router-dom";
import {
  PageNotFound,
  Exercise4page,
  Exercise4Homepage,
  Exercise4Bitcoin,
} from "../Components";

export function Exercise4Routes(props) {
  return (
    <Routes>
      <Route
        index
        path="/Exercise4Homepage"
        element={<Exercise4Homepage {...props} />}
      />
      <Route path="/Exercise4login" element={<Exercise4page {...props} />} />
      <Route
        path="/Exercise4Bitcoin"
        element={<Exercise4Bitcoin {...props} />}
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Exercise4Routes;
