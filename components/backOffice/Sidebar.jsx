"use client";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export default function Sidebar({ showSidebar }) {
	const [openMenu, setOpenMenu] = useState();
	return (
		<div
			className={
				showSidebar
					? "md:block mt-20 md:mt-0 bg-gray-50 dark:bg-slate-800 fixed left-0 z-40 h-screen text-slate-800 dark:text-white p-4 w-52"
					: "hidden  bg-gray-50 dark:bg-slate-800 fixed left-0 z-40 h-screen text-slate-800 dark:text-white p-4 w-52"
			}
		>
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
				<Link href="#">Category</Link>
				<Collapsible>
					<CollapsibleTrigger onClick={() => setOpenMenu(!openMenu)}>
						<div className="flex items-center gap-4">
							<span>Dropdown</span>

							{openMenu ? (
								<ChevronDown size={16} />
							) : (
								<ChevronRight size={16} />
							)}
						</div>
					</CollapsibleTrigger>
					<CollapsibleContent className="bg-slate-700 text-slate-50 rounded">
						<div className="flex flex-col">
							<Link
								className="hover:bg-slate-500 px-3 pl-6 py-1"
								href="#"
							>
								item 1
							</Link>
							<Link
								className="hover:bg-slate-500 px-3 pl-6 py-1"
								href="#"
							>
								item 1
							</Link>
						</div>
					</CollapsibleContent>
				</Collapsible>

				<Link href="#">Markets</Link>
				<Link href="#">Farmers</Link>
				<Link href="#">Stuff</Link>
				<Link href="#">Settings</Link>
				<Link href="#">Online Stores</Link>
			</div>
		</div>
	);
}
