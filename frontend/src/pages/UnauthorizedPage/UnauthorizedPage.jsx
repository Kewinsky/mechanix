import "./UnauthorizedStyles.scss";

const UnauthorizedPage = () => {
  return (
    <div className="unauthorized-page">
      <h1>Error 401</h1>
      <p>
        You have no privileges to access this content. Go to{" "}
        <a href="/">home page</a>
      </p>
    </div>
  );
};

export default UnauthorizedPage;
