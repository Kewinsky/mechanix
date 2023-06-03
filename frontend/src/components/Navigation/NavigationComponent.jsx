import "./NavigationStyles.scss";

const NavigationComponent = ({ tabs, handleTabClick, selectedTab }) => {
  return (
    <div className="navigation-wrapper">
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
  );
};

export default NavigationComponent;
