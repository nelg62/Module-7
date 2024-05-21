import {
  Outlet,
  useParams,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useData } from "../hooks/useData";

// save as pages/PostsPage.jsx
export default function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}

export function PostList() {
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
  const postsData = useData(
    "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
  );

  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value });
  };

  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <>
      <ul>{postList}</ul>
      <select
        name="Limitoptions"
        id="Limitoptions"
        onChange={handleChangeLimit}
      >
        <option value={"5"}>Load 5 Posts</option>
        <option value={"10"}>Load 10 Posts</option>
        <option value={"20"}>Load 20 Posts</option>
      </select>
    </>
  );
}

export function Post() {
  const { id } = useParams(); // custom hook to access dynamic params
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);
  const navigate = useNavigate();

  const NextPost = () => {
    const nextId = Number(id) + 1;
    navigate(`/posts/${nextId}`);
  };

  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
          <button onClick={NextPost}>Next Post</button>
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
}
