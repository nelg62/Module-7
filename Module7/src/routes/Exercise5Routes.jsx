import { Route, Routes } from "react-router-dom";
import {
  Exercise5Bitcoin,
  Exercise5Homepage,
  Exercise5LoginPage,
  ProtectedRoute,
} from "../Components";
import PostsPage, { Post, PostList } from "../pages/PostsPage";

export function Exercise5Routes(props) {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <ProtectedRoute redirectPath="/Login">
            <Exercise5Homepage {...props} />
          </ProtectedRoute>
        }
      />
      <Route
        index
        path="/Homepage"
        element={
          <ProtectedRoute redirectPath="/Login">
            <Exercise5Homepage {...props} />
          </ProtectedRoute>
        }
      />
      <Route path="/Login" element={<Exercise5LoginPage {...props} />} />

      <Route
        path="/Bitcoin"
        element={
          <ProtectedRoute redirectPath="/Login">
            <Exercise5Bitcoin {...props} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/Posts"
        element={
          <ProtectedRoute redirectPath="/Login">
            <PostsPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route index element={<PostList />} />
        {/* dynamic param taken from route, stored in variable called id */}
        <Route path=":id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default Exercise5Routes;
