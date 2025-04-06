import LargeCard from "@/components/backOffice/LargeCard";
import { Layers } from "lucide-react";
import { Barcode } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { CornerRightDown } from "lucide-react";

export default function LargeCards() {
	const orderStatus = [
		{
			title: "Today Orders",
			value: "120 ",
			bg_color: "bg-green-600",
			icon: Layers,
		},
		{
			title: "Yesterday Orders",
			value: "220",
			bg_color: "bg-blue-600",
			icon: Barcode,
		},
		{
			title: "This Month",
			value: "10200",
			bg_color: "bg-cyan-600",
			icon: ShoppingCart,
		},
		{
			title: "Last Month",
			value: "1620",
			bg_color: "bg-yellow-600",
			icon: CornerRightDown,
		},
		{
			title: "All Time Sales",
			value: "11120",
			bg_color: "bg-teal-600",
			icon: Layers,
		},
	];
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
			{orderStatus.map((item, i) => {
				return <LargeCard data={item} key={i} />;
			})}
		</div>
	);
}
