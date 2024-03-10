import { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import dailytotalcost from "./data/dailytotalcost.json";
import dailyusagecost from "./data/dailyusagecost.json";

export default function DailyTotal() {
  // Function to convert yyyymmdd to yyyy-mm-dd format
  const formatDate = (dateString) => {
    dateString = dateString.toString(); // Convert to string
    if (typeof dateString !== "string") {
      console.error("Invalid date string:", dateString);
      return dateString; // return as is if invalid format
    }
    if (dateString.length !== 8) {
      console.error("Invalid date length:", dateString);
      return dateString; // return as is if invalid format
    }
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <div>
        <h4 className="text-center">Daily Cost Overview</h4>
        <Line
          data={{
            labels: dailytotalcost.rows.map((row) => formatDate(row[1])),
            datasets: [
              {
                label: "Total Cost in CAD",
                data: dailytotalcost.rows.map((row) => row[0]),
                borderColor: "#f9b115",
                fill: true,
                pointBackgroundColor: "black",
                pointRadius: 5,
                pointHoverRadius: 7,
              },
              {
                label: "Usage Cost in CAD",
                data: dailyusagecost.rows.map((row) => row[0]),
                borderColor: "#3399ff",
                fill: true,
                pointBackgroundColor: "black",
                pointRadius: 5,
                pointHoverRadius: 7,
              },
            ],
          }}
          options={{
            plugins: {
              tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker tooltip background color
              },
            },
            scales: {
              y: {
                grid: {
                  color: "rgba(0, 0, 0, 0.1)", // Lighter Y-axis grid color
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}
