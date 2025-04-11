"use client";

import Sidebar from "@/components/backOffice/Sidebar";
import Navbar from "@/components/backOffice/Navbar";
import { ThemeProvider } from "next-themes";

export default function Layout({ children }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
		>
			<div className="flex">
				{/* Sidebar */}
				<div>
					<Sidebar />
				</div>

				{/* Main layout area */}
				<div className="w-full">
					{/* Navbar */}
					<div>
						<Navbar />
					</div>

					{/* Page content */}
					<main className="p-8 pt-20 bg-white dark:bg-slate-900 text-black dark:text-slate-50 min-h-screen">
						{children}
					</main>
				</div>
			</div>
		</ThemeProvider>
	);
}
