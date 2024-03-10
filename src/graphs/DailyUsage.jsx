import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import dailytotalcost from "./data/dailyusagecost.json";

export default function DailyUsage() {
  // Function to convert yyyymmdd to yyyy-mm-dd format
  const formatDate = (dateString) => {
    dateString = dateString.toString(); // Convert to string
    console.log("dateString:", dateString);
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
        <h4 className="text-center">Daily Usage Cost</h4>
        <Bar
          data={{
            labels: dailytotalcost.rows.map((row) => formatDate(row[1])),
            datasets: [
              {
                label: "Cost in CAD",
                data: dailytotalcost.rows.map((row) => row[0]),
                backgroundColor: "#3399ff", // Bar color
                borderColor: "#1a5ba8", // Border color
                borderWidth: 1, // Border width
                hoverBackgroundColor: "grey", // Bar color on hover
                hoverBorderColor: "#4cae4c", // Border color on hover
              },
            ],
          }}
          options={{
            scales: {
              x: {
                grid: {
                  display: false, // Hide x-axis grid lines
                },
              },
              y: {
                grid: {
                  color: "rgba(0, 0, 0, 0.1)", // Customize y-axis grid line color
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}
