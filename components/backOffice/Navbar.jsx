import {
	Sun,
	Bell,
	User,
	AlignJustify,
	LayoutDashboard,
	Settings,
	LogOut,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
	return (
		<div className="pl-52 z-50">
			{/* 3 icons */}
			<div className="flex items-center justify-between bg-slate-700 text-slate-50 h-15 px-8 py-4 fixed top-0 w-full pr-56">
				<button>
					<AlignJustify />
				</button>
				<div className="flex items-center space-x-3">
					<button>
						<Sun />
					</button>
					<button>
						<Bell />
					</button>
					<DropdownMenu className={cn("")}>
						<DropdownMenuTrigger className="cursor-pointer">
							<User />
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className={cn("text-red-500 absolute right-3 ")}
						>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<Link href="/dashboard/profile">
								<DropdownMenuItem className="">
									<Settings />
									<span>Profile</span>
								</DropdownMenuItem>
							</Link>
							<DropdownMenuItem>Billing</DropdownMenuItem>
							<Link href="/">
								<DropdownMenuItem>
									<LayoutDashboard />
									<span>Dashboard</span>
								</DropdownMenuItem>
							</Link>
							<DropdownMenuItem>
								<LogOut />
								<span>Log out</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
}
