import { useEffect, useState } from "react";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import FooterComponent from "../components/Footer/FooterComponent";
import "./MainLayout.scss";
import PreviewCartComponent from "../components/Sidebar/SidebarComponent";

const MainLayout = ({ children, pageTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <NavbarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
      <PreviewCartComponent isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="main__content">{children}</main>
      <FooterComponent />
    </>
  );
};

export default MainLayout;
