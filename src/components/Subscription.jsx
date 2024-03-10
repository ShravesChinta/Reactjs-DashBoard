import { useState } from "react";
import YearlySubscription from "../graphs/YearlySubscription";
import DailySubscription from "../graphs/DailySubscription";
import DataDailySubscription from "../graphs/DataDailySubscription";

function Subscription() {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container pt-5 px-3">
      <div className="tabs-container">
        {/* Tab buttons */}
        <div className="tab-buttons">
          <button
            onClick={() => handleTabClick("tab1")}
            className={activeTab === "tab1" ? "active" : ""}
          >
            Yearly
          </button>
          <button
            onClick={() => handleTabClick("tab2")}
            className={activeTab === "tab2" ? "active" : ""}
          >
            Daily
          </button>
          <button
            onClick={() => handleTabClick("tab3")}
            className={activeTab === "tab3" ? "active" : ""}
          >
            Table Data
          </button>
        </div>

        {/* Tab content */}
        <div className="tab-content">
          {activeTab === "tab1" && <YearlySubscription />}
          {activeTab === "tab2" && <DailySubscription />}
          {activeTab === "tab3" && <DataDailySubscription />}
        </div>
      </div>
    </div>
  );
}

export default Subscription;
