import BestSellingChart from "./BestSellingChart";
import WeeklySalesChart from "@/components/backOffice/WeeklySalesChart";

export default function DashboardChart() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			<BestSellingChart />
			<WeeklySalesChart />
		</div>
	);
}
