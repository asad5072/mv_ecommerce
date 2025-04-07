"use client";
import { useState } from "react";

export default function BestsellingChart() {
	const tabs = [
		{
			title: "Sales",
			type: "sales",
		},
		{
			title: "Orders",
			type: "order",
		},
	];

	const [chartToDisplay, setChartToDisplay] = useState("sales");

	return (
		<div className="rounded-lg text-slate-50 bg-slate-800 p-4 shadow-md flex flex-col items-center gap-4">
			<p>Best Selling Chart</p>

			{/* tabs */}
			<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
				<ul className="flex flex-wrap -mb-px">
					{tabs.map((item, i) => (
						<li className="me-2" key={i}>
							<button
								onClick={() => setChartToDisplay(item.type)}
								className={
									chartToDisplay === item.type
										? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
										: "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
								}
							>
								{item.title}
							</button>
						</li>
					))}
				</ul>
			</div>

			{/* chart content */}
			<div className="w-full mt-4">
				{chartToDisplay === "sales" && <div>Sales chart here</div>}
				{chartToDisplay === "order" && <div>Orders chart here</div>}
			</div>
		</div>
	);
}
