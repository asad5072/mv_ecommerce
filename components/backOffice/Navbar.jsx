"use client";
import { Sun, Bell, User, AlignJustify } from "lucide-react";
import Image from "next/image";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcher from "../ThemeSwitcher";

export default function Navbar() {
	return (
		<div className="pl-52 z-50">
			{/* 3 icons */}
			<div className="flex items-center justify-between bg-slate-700 text-slate-50 h-16 px-8 py-4 fixed top-0 w-full pr-56">
				<button>
					<AlignJustify />
				</button>
				<div className="flex items-center gap-4">
					{/* <button>
						<Sun className="text-green-600" />
					</button> */}
					<div>
						<ThemeSwitcher />
					</div>

					<button
						type="button"
						className="relative inline-flex items-center text-sm font-medium text-center text-white bg-transparent rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-transparent  "
					>
						<Bell className="text-green-600" />
						<span className="sr-only">Notifications</span>
						<div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3 -end-3 dark:border-gray-600">
							20
						</div>
					</button>

					<button>
						<User className="text-green-600" />
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
