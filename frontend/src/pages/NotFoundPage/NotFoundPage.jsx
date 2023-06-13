import "./NotFoundStyles.scss";

const NotFoundPage = () => {
  return (
    <div className="error-page">
      <h1>Error 404</h1>
      <p>
        Not found. Go to <a href="/">home page</a>
      </p>
    </div>
  );
};

export default NotFoundPage;
