import "./LogoutStyles.scss";
import { BsBoxArrowRight } from "react-icons/bs";

const LogoutTab = () => {
  return (
    <div className="logout-wrapper">
      <button>
        <BsBoxArrowRight size="20" /> Logout
      </button>
    </div>
  );
};

export default LogoutTab;
