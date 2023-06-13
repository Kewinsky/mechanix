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
      <button onClick={handleLeftClick}>
        <BsArrowBarLeft size="24" />
      </button>
      <div className="tabs">
        {tabs.map((name, index) => (
          <a
            key={index}
            href="/"
            onClick={(e) => handleTabClick(e, index)}
            className={`${selectedTab === index ? "selected" : ""}`}
          >
            {name}
          </a>
        ))}
      </div>
      <button onClick={handleRightClick}>
        <BsArrowBarRight size="24" />
      </button>
    </div>
  );
};

export default NavigationComponent;
