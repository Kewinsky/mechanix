import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage";
import CustomerAccountPage from "../pages/CustomerAccountPage/CustomerAccountPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";

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
      <Route
        path="/shop"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Shop"}>
            <ShopPage />
          </MainLayout>
        }
      />
      <Route
        path="/product"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Product"}>
            <ProductPage />
          </MainLayout>
        }
      />
      <Route
        path="/order"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Order"}>
            <OrderPage />
          </MainLayout>
        }
      />
      <Route
        path="/shoppingcart"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Shooping Cart"}>
            <ShoppingCartPage />
          </MainLayout>
        }
      />
      <Route
        path="/checkout"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Checkout"}>
            <CheckoutPage />
          </MainLayout>
        }
      />
      <Route
        path="/myaccount"
        element={
          <MainLayout pageTitle={"MECHANiX_ | My Account"}>
            <CustomerAccountPage />
          </MainLayout>
        }
      />
      <Route
        path="/contactus"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Contact Us"}>
            <ContactPage />
          </MainLayout>
        }
      />
      <Route
        path="/aboutus"
        element={
          <MainLayout pageTitle={"MECHANiX_ | About Us"}>
            <AboutPage />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Login"}>
            <LoginPage />
          </MainLayout>
        }
      />
      <Route
        path="/resetpassword"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Reset password"}>
            <ResetPasswordPage />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default Router;
