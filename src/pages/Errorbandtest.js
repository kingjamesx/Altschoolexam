import { ErrorBoundary } from "react-error-boundary";
import { BiErrorCircle } from "react-icons/bi";
const ErrorFallback = ({ error}) => {
  return (
    <div className="error-f">
      <h1>Something went wrong</h1>
      <p className="pre" style={{ color: "red" }}><span><BiErrorCircle className="icon-f"/></span><span>{error.message}</span></p>
    </div>
  );
};

const Greeting = ({ subject}) => {
  return (<div>Hello {subject.toUpperCase()}
  </div>);
};

const Farewell = ({ subject }) => {
  return <div>Goodbye {subject.toUpperCase()}</div>;
};
const FavouriteFood = () => {
  return <div>Rice and Chicken</div>;
};
const Errorbandtest = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Greeting subject='world'/>
        <Farewell/>
        <FavouriteFood/>
      </ErrorBoundary>
    </>
  );
};
export default Errorbandtest;
