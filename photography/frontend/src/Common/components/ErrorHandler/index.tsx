import { FC, useEffect } from "react";
import { useRouteError } from "react-router";
import { displayError } from "./helpers/handleError";

const ErrorHandler: FC = () => {
  const error = useRouteError();

  useEffect(() => displayError(error), [error]);

  return <div>Something went wrong. Please try again later.</div>;
}

export default ErrorHandler;
