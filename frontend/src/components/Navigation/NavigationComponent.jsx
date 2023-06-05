import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import "./NavigationStyles.scss";

const NavigationComponent = ({ tabs, selectedTab, setSelectedTab }) => {
  const handleTabClick = (e, index) => {
    e.preventDefault();
    setSelectedTab(index);
  };

  const handleLeftClick = () => {
    if (selectedTab > 0) {
      selectedTab = selectedTab - 1;
      setSelectedTab(selectedTab);
    }
  };

  const handleRightClick = () => {
    if (selectedTab < tabs.length - 1) {
      selectedTab = selectedTab + 1;
      console.log(selectedTab);
      setSelectedTab(selectedTab);
    }
  };

  return (
    <div className="navigation-wrapper">
      <button onClick={handleLeftClick} className="navigation-button-left">
        <BsArrowBarLeft size="24" />
      </button>
      <div className="navigation-tabs">
        {tabs.map((name, index) => (
          <a
            key={index}
            href="/"
            onClick={(e) => handleTabClick(e, index)}
            className={`navigation-link ${
              selectedTab === index ? "selected" : ""
            }`}
          >
            {name}
          </a>
        ))}
      </div>
      <button onClick={handleRightClick} className="navigation-button-right">
        <BsArrowBarRight size="24" />
      </button>
    </div>
  );
};

export default NavigationComponent;
