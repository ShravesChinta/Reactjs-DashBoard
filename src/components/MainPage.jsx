import { useState, useEffect } from "react";
import DailyTotal from "../graphs/DailyTotal";
import DailyPurchases from "../graphs/DailyPurchases";
import DailyReservation from "../graphs/DailyReservation";
import DailyUsage from "../graphs/DailyUsage";
import dailyTotalCost from "../graphs/data/dailytotalcost.json";
import dailyPurchasesCost from "../graphs/data/dailytotalpurchases.json";
import dailyReservationCost from "../graphs/data/dailytotalreservationcost.json";
import dailyUsageCost from "../graphs/data/dailyusagecost.json";

function calculateTotalCost(data) {
  let totalCost = 0;
  data.rows.forEach((row) => {
    totalCost += row[0]; // Assuming the cost is the first element in each row
  });
  return totalCost;
}

function MainPage() {
  const [data, setData] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalPurchasesCost, setTotalPurchasesCost] = useState(0);
  const [totalReservationCost, setTotalReservationCost] = useState(0);
  const [totalUsageCost, setTotalUsageCost] = useState(0);

  // Simulate fetching data from an API
  useEffect(() => {
    // Calculate total cost from JSON data
    const total = calculateTotalCost(dailyTotalCost);
    const totalPurchases = calculateTotalCost(dailyPurchasesCost);
    const totalReservation = calculateTotalCost(dailyReservationCost);
    const totalUsage = calculateTotalCost(dailyUsageCost);

    // Set the state with real data
    setData([
      { name: "Total Cost", cost: total.toFixed(2), percentage: "" },
      { name: "Usage Cost", cost: totalUsage.toFixed(2), percentage: "" },
      {
        name: "Purchase Cost",
        cost: totalPurchases.toFixed(2),
        percentage: "",
      },
      { name: "RI Cost", cost: totalReservation.toFixed(2), percentage: "" },
    ]);
    setTotalCost(total);
    setTotalPurchasesCost(totalPurchases);
    setTotalReservationCost(totalReservation);
    setTotalUsageCost(totalUsage);
  }, []);

  return (
    <div className="container pt-5 px-3">
      <div className="info row p-7">
        {data.map((item, index) => (
          <div className="info-sec col mb-3" key={index}>
            <div className={`cost-info row bg-${(index % 4) + 1}`}>
              <div className="name-display text-center h5 pt-1">
                {item.name}
              </div>
              <div className="cost-display col h3 align-self-end">
                {item.cost}
              </div>
              <div className="percentage-display col align-self-end">
                {item.percentage}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mainpage-info row pt-5 mb-5">
        <div className="mainpage-graph col-lg-12">
          <DailyTotal />
        </div>
      </div>
      <div className="mainpage-info row pt-5 mb-5">
        <div className="mainpage-graph col-lg-12">
          <DailyUsage />
        </div>
      </div>

      <div className="mainpage-info row pt-5 mb-5">
        <div className="mainpage-graph col-lg">
          <DailyPurchases />
        </div>
        <div className="mainpage-graph col-lg ">
          <DailyReservation />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
