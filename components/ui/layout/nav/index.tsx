import React from "react";
import { OutlinedButton1, PrimaryButton } from "../../atoms/buttons";
import Link from "next/link";

const LayoutNavbar = ({
	isLoggedIn = false,
	isEmployer = false,
}: {
	isLoggedIn: boolean;
	isEmployer: boolean;
}) => {
	return (
		<div className="fixed top-0 w-full z-50 flex justify-between p-5 items-center bg-white border-b border-zinc-200 md:px-14 px-7">
			<div className="flex items-center gap-12">
				<Link href="/">
					<h1 className="font-bold text-2xl relative cursor-pointer">
						FindJob
						<span className="bg-blue-500 p-1 rounded-full absolute bottom-2 -right-2.5"></span>
					</h1>
				</Link>
				<form className="hidden lg:flex items-center">
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-blue-900 sr-only dark:text-white"
					>
						Search
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								className="w-5 h-5 text-blue-500 dark:text-blue-400"
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
							id="default-search"
							className="block p-3 pl-10 pr-40 text-sm text-blue-900 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-0"
							placeholder="Job title, Keyword..."
						/>
					</div>
				</form>
			</div>
			<div className="flex gap-5 items-center lg:w-[25%]">
				{!isLoggedIn ? <OutlinedButton1 title="Sign In" link="/login" /> : "Profile"}
				<PrimaryButton
					title="Post a Job"
					link={isLoggedIn && isEmployer ? "/job/new" : "/"}
				/>
			</div>
		</div>
	);
};

export default LayoutNavbar;
