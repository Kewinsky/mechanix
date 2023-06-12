import "./LogoutStyles.scss";
import { BsBoxArrowRight } from "react-icons/bs";

const LogoutTab = () => {
  return (
    <div className="logout-tab">
      <button>
        <BsBoxArrowRight size="20" /> Logout
      </button>
    </div>
  );
};

export default LogoutTab;
