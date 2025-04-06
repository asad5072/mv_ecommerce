import Heading from "@/components/backOffice/Heading";
import LargeCards from "@/components/backOffice/LargeCards";
import DashboardChart from "@/components/backOffice/DashboardChart";
export default function Dashboard() {
	return (
		<div className="space-y-6">
			<Heading title="Dashboard Overview" />
			{/* cards */}
			<LargeCards />
			{/* Charts */}
			<DashboardChart />
			{/* Recent Orders table */}
		</div>
	);
}
