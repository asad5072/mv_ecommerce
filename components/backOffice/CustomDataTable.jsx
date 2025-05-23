"use client";
import data from "@/data.json";
import { useState } from "react";

export default function CustomDataTable() {
	const page_size = 10;
	const [currentPage, setCurrentPage] = useState(1);
	const startIndex = (currentPage - 1) * page_size;
	const endIndex = startIndex + page_size;
	const currentlyDisplayedData = data.slice(startIndex, endIndex);
	const totalPages = Math.ceil(data.length / page_size);
	const itemStartIndex = startIndex + 1;
	const itemEndIndex = Math.min(startIndex + page_size, data.length);

	return (
		<div className="md:mr-8">
			<p>Today Sales</p>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th
								scope="col"
								className="p-4"
							>
								<div className="flex items-center">
									<input
										id="checkbox-table-search-1"
										type="checkbox"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										htmlFor="checkbox-table-search-1"
										className="sr-only"
									>
										checkbox
									</label>
								</div>
							</th>
							<th
								scope="col"
								className="px-6 py-3"
							>
								Product name
							</th>
							<th
								scope="col"
								className="px-6 py-3"
							>
								Quantity
							</th>
							<th
								scope="col"
								className="px-6 py-3"
							>
								Price
							</th>
							<th
								scope="col"
								className="px-6 py-3"
							>
								ID
							</th>
							<th
								scope="col"
								className="px-6 py-3"
							>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{currentlyDisplayedData.map((item, i) => {
							return (
								<tr
									key={i}
									className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
								>
									<td className="w-4 p-4">
										<div className="flex items-center">
											<input
												id="checkbox-table-search-1"
												type="checkbox"
												className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											/>
											<label
												htmlFor="checkbox-table-search-1"
												className="sr-only"
											>
												checkbox
											</label>
										</div>
									</td>
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										{item.item_name}
									</th>
									<td className="px-6 py-4">{item.qty}</td>
									<td className="px-6 py-4">${item.Price}</td>
									<td className="px-6 py-4">{item.id}</td>
									<td className="px-6 py-4">
										<a
											href="#"
											className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
										>
											Edit
										</a>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<nav
					className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
					aria-label="Table navigation"
				>
					<span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
						Showing{" "}
						<span className="font-semibold text-gray-50 dark:text-white">
							{itemStartIndex}-{itemEndIndex}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-gray-50 dark:text-white">
							{data.length}
						</span>
					</span>
					<ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
						<li>
							<button
								onClick={() => setCurrentPage(currentPage - 1)}
								disabled={currentPage === 1}
								className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								Previous
							</button>
						</li>
						{Array.from({ length: totalPages }, (_, index) => {
							return (
								<li key={index}>
									<button
										onClick={() => setCurrentPage(index + 1)}
										disabled={currentPage == index + 1}
										className={
											currentPage == index + 1
												? "flex items-center justify-center px-3 h-8 leading-tight text-white-500 bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
												: "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
										}
									>
										{index + 1}
									</button>
								</li>
							);
						})}

						<li>
							<button
								onClick={() => setCurrentPage(currentPage + 1)}
								disabled={currentPage === totalPages}
								className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								Next
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
