import { useEffect } from "react";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import FooterComponent from "../components/Footer/FooterComponent";

const MainLayout = ({ children, pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};

export default MainLayout;
