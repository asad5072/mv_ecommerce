import Sidebar from "@/components/backOffice/Sidebar";
import Navbar from "@/components/backOffice/Navbar";

export default function Layout({ children }) {
	return (
		<div className="flex">
			<div>
				{/* side bar */}
				<Sidebar />
			</div>
			<div className="w-full">
				{/* header */}
				<div>
					<Navbar />
				</div>
				{/* main body */}
				<main className="p-8 pt-20 bg-slate-900 text-slate-50 min-h-screen">
					{children}
				</main>
			</div>
		</div>
	);
}
