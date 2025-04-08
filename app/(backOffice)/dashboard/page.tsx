import Heading from "@/components/backOffice/Heading";
import LargeCards from "@/components/backOffice/LargeCards";
import DashboardChart from "@/components/backOffice/DashboardChart";
import CustomDataTable from "@/components/backOffice/CustomDataTable";
export default function Dashboard() {
	return (
		<div className="space-y-6 h-screen overflow-y-scroll custom-scroll">
			<Heading title="Dashboard Overview" />
			{/* cards */}
			<LargeCards />
			{/* Charts */}
			<DashboardChart />
			{/* Recent Orders table */}
			<CustomDataTable />
		</div>
	);
}
