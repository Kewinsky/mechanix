import { useEffect } from "react";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import FooterComponent from "../components/Footer/FooterComponent";
import "./MainLayout.scss";

const MainLayout = ({ children, pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <NavbarComponent />
      <main className="main__content">{children}</main>
      <FooterComponent />
    </>
  );
};

export default MainLayout;
