import { Bar, Line } from "react-chartjs-2";
import dailytotalcost from "./data/dailytotalreservationcost.json";

export default function DailyReservation() {
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
    <div>
      <h4 className="text-center">Daily RI Cost</h4>
      <Line
        data={{
          labels: dailytotalcost.rows.map((row) => formatDate(row[1])),
          datasets: [
            {
              label: "Cost in CAD",
              data: dailytotalcost.rows.map((row) => row[0]),
              backgroundColor: "#e55353",
            },
          ],
        }}
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
          },
        }}
      />
    </div>
  );
}
