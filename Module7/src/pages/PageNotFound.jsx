import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <p>
        What were you looking for? Maybe going back <Link to="/">home</Link>
        will help you find it.
      </p>
      <p>
        Standard a Href link to <a href="/">home page?</a>
      </p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default PageNotFound;
