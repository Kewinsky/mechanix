import "./UnauthorizedStyles.scss";

const UnauthorizedPage = () => {
  return (
    <div className="page__wrapper">
      <h1 className="page__header">Error 401</h1>
      <div className="page__content">
        You have no privileges to access this content. Go to{" "}
        <a href="/" className="page__content-link">
          home page
        </a>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
