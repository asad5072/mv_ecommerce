import { Layers } from "lucide-react";

export default function LargeCard({ data }) {
	const Icon = data.icon;
	return (
		<div
			className={`rounded-lg text-slate-50 ${data.bg_color} p-4 shadow-md flex flex-col items-center gap-4`}
		>
			{/* <Layers /> */}
			<Icon />
			<p>{data.title}</p>
			<p>${data.value}</p>
		</div>
	);
}
