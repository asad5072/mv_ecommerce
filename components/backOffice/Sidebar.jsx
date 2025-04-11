import Link from "next/link";

export default function Sidebar() {
	return (
		<div className=" bg-gray-50 dark:bg-slate-800 fixed left-0 z-40 h-screen text-slate-800 dark:text-white p-4 w-52">
			<Link
				className=""
				href="#"
			>
				Logo
			</Link>
			<div className="flex flex-col space-y-3 pt-6">
				<Link href="/dashboard/">Dashboard</Link>
				<Link href="dashboard/products/">Products</Link>
				<Link href="#">Customers</Link>
				<Link href="#">Catalouge</Link>
				<Link href="#">Category</Link>
				<Link href="#">Markets</Link>
				<Link href="#">Farmers</Link>
				<Link href="#">Stuff</Link>
				<Link href="#">Settings</Link>
				<Link href="#">Online Stores</Link>
			</div>
		</div>
	);
}
