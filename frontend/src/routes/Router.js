import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Home"}>
            <HomePage />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default Router;
