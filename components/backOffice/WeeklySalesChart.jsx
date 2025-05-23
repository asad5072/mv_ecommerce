"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function WeeklySalesChart() {
	const data = {
		labels: [
			"Green Lettuce",
			"Rainbow Chard",
			"Water Melon",
			"Green Peaces",
			"Maize",
			"Orange",
		],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	};
	return (
		<div
			className={`rounded-lg bg-slate-800 text-slate-50 p-4 shadow-md flex flex-col items-center gap-4`}
		>
			<p>Weekly Sales Chart</p>
			<div className="">
				<Pie data={data} />
			</div>
		</div>
	);
}
