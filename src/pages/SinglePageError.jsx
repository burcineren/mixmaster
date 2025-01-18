import Wrapper from "../assets/wrappers/ErrorPage";
import { useRouteError } from "react-router-dom";
const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <div>
        <h3> Something Went Wrong...</h3>
      </div>
    </Wrapper>
  );
};

export default SinglePageError;
