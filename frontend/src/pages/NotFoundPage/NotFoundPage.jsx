const NotFoundPage = () => {
  return (
    <div className="page__wrapper">
      <h1 className="page__header">Error 404</h1>
      <div className="page__content">
        Not found. Go to{" "}
        <a href="/" className="page__content-link">
          home page
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
