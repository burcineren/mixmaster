import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="">
          <img src={img} alt="Not Found" />
          <h1>Page Not Found</h1>
          <p>Sorry, the page you're looking for doesn't exist.</p>
          <Link to="/">Go Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3> Something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
