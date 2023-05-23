import React, { useEffect } from "react";
import { OutlinedButton1, PrimaryButton } from "../../atoms/buttons";
import Link from "next/link";
import { isAuth } from "../../../../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../../../types/graphql.type";

const LayoutNavbar = () => {
	const { data, refetch } = useQuery(GET_USER, {
		fetchPolicy: "network-only",
	});
	useEffect(() => {
		refetch();
	}, []);

	return (
		<div className="fixed top-0 w-full z-50 flex justify-between p-5 items-center bg-white border-b border-zinc-200 md:px-14 px-7 max-h-[10%]">
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
			{!isAuth() && (
				<div className={`flex gap-5 items-center lg:w-[40%]`}>
					<OutlinedButton1 title="Sign In" link="/login" />
					<PrimaryButton title="Post a Job" link="/login" />
				</div>
			)}
			{isAuth() && (
				<div
					className={`flex gap-5 items-center md:mr-0 mr-5 lg:w-[40%] flex-row-reverse`}
				>
					<Link href="/profile">
						<div
							className="cursor-pointer h-12 p-[1px] w-12 flex justify-center
				 rounded-full bg-green-400"
						>
							<img
								src="/images/default_image.png"
								alt="profile_image"
								className="w-full h-auto object-cover rounded-full"
							/>
						</div>
					</Link>
					{isAuth() && data?.getUser?.accountType == `EMPLOYER` && (
						<PrimaryButton title="Post a Job" link="/profile/dashboard#post-job" />
					)}
				</div>
			)}
		</div>
	);
};

export default LayoutNavbar;
