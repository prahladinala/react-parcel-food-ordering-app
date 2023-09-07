import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="align-center container">
      <h1>
        Oops! {err.status} Page {err.statusText}
      </h1>
      <h2>Something went wrong</h2>
      <p>{err.data}</p>
    </div>
  );
};

export default Error;
