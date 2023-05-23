import { useRouter } from "next/router";
import { useState } from "react";
import { LocationOutline } from "react-ionicons";

export const JobSearchForm = () => {
	const router = useRouter();
	const [searchVal, setSearchVal] = useState("");
	const [searchLocationVal, setSearchLocationVal] = useState("");
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		router.push(`/jobs?search=${searchVal}&location=${searchLocationVal}`);
	};
	return (
		<form className="bg-white p-4" onSubmit={handleSubmit}>
			<div className="lg:flex grid lg:gap-6 divide-gray-100 lg:divide-x-2 lg:divide-y-0 divide-y-2">
				<div className="flex items-center">
					<div className="relative w-full">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-full">
							<svg
								aria-hidden="true"
								className="w-5 h-5 text-[blue]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</div>
						<input
							type="search"
							value={searchVal}
							onChange={(e) => setSearchVal(e.target.value)}
							className="block p-2.5 pl-10 w-full lg:w-[21vw] z-20 text-sm text-gray-900 focus:ring-0 outline-0"
							placeholder="Job title, Keyword..."
							required
						/>
					</div>
				</div>
				<div className="relative w-full">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<LocationOutline color="blue" />
					</div>
					<input
						type="search"
						className="block p-2.5 pl-10 lg:pr-20 w-full z-20 text-sm text-gray-900 focus:ring-0 outline-0"
						value={searchLocationVal}
						onChange={(e) => setSearchLocationVal(e.target.value)}
						placeholder="Select Location"
						required
					/>
					<button
						onClick={handleSubmit}
						type="submit"
						className="absolute lg:top-0 top-16 right-0 p-2.5 px-6 font-medium text-white bg-blue-700 rounded hover:bg-blue-800focus:outline-none focus:ring-0"
					>
						Find
					</button>
				</div>
			</div>
		</form>
	);
};
