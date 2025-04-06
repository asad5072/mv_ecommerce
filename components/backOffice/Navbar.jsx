import { Sun, Bell, User, AlignJustify } from "lucide-react";

export default function Navbar() {
	return (
		<div className="">
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
					<button>
						<User />
					</button>
				</div>
			</div>
		</div>
	);
}
