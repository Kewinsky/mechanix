import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";
import UnauthorizedPage from "../pages/UnauthorizedPage/UnauthorizedPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TermsOfUsePage from "../pages/TermsOfUsePage/TermsOfUsePage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage/PrivacyPolicyPage";
import FavouritesPage from "../pages/FavouritesPage/FavouritesPage";
import AccountPage from "../pages/AccountPage/AccountPage";

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
        path="/favourites"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Favourites"}>
            <FavouritesPage />
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
        path="/cart"
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
            <AccountPage />
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
        path="/terms-of-use"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Terms Of Use"}>
            <TermsOfUsePage />
          </MainLayout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Privacy Policy"}>
            <PrivacyPolicyPage />
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
      <Route
        path="/unauthorized"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Unauthorized"}>
            <UnauthorizedPage />
          </MainLayout>
        }
      />
      <Route
        path="*"
        element={
          <MainLayout pageTitle={"MECHANiX_ | Not found"}>
            <NotFoundPage />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default Router;
