import React from "react";

export const TabsComponent = ({setActiveTab, activeTab, tabs}) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => {
        const {id, label} = tab;
        const onTabClickHandler = () => {
          setActiveTab(tab);
        };

        return (
          <button
            onClick={onTabClickHandler}
            className={`tabs__tab ${activeTab.id === id ? "tabs__active" : ""}`}
            key={id}
          >
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
};
