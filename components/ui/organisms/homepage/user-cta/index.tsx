import Link from "next/link";
import React from "react";
import { ArrowForwardOutline } from "react-ionicons";
import { RegAccountType } from "../../../../../interfaces/user.type";

const UserCTA = () => {
	return (
		<div className="md:px-16 px-8 pt-14 md:pt-28 mt-6 pb-10">
			<div className="flex justify-center">
				<div className="grid lg:grid-cols-2 gap-3">
					<div className="rounded-xl lg:h-66 h-80 w-full bg-no-repeat bg-[url('/images/freelancer_cta_bg_1.png')] bg-contain lg:bg-cover">
						<div className="p-4 grid gap-1 m-3 mx-5">
							<h1 className="md:text-2xl text-lg font-semibold">
								Become a Freelancer
							</h1>
							<p className="text-sm lg:w-1/2 md:w-2/3">
								Click the button below to get started with our candidate registration
								process. You will be able to post your resume and apply for jobs.
							</p>
							<Link href={`/register?type=${RegAccountType.FREELANCER.toLowerCase()}`}>
								<div className="hover:scale-105 cursor-pointer flex items-center lg:text-[dodgerblue] duration-300 lg:bg-white bg-blue-600 p-3 lg:w-1/3 md:w-2/5 text-white gap-2 rounded-lg mt-5">
									Register
									<div className="hidden lg:flex">
										<ArrowForwardOutline color="dodgerblue" height="20px" width="20px" />
									</div>
									<div className="lg:hidden">
										<ArrowForwardOutline color="white" height="20px" width="20px" />
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="rounded-xl lg:h-66 h-80 w-full bg-no-repeat bg-[url('/images/employer_cta_bg_1.png')] bg-contain lg:bg-cover">
						<div className="p-4 grid gap-1 text-white m-3 mx-5">
							<h1 className="md:text-2xl text-lg font-semibold">Become an Employer</h1>
							<p className="text-sm lg:w-1/2 md:w-2/3">
								Click the button below to get started with our employer registration
								process. You will be able to post jobs and get candidates for your job.
							</p>
							<Link href={`/register?type=${RegAccountType.EMPLOYER.toLowerCase()}`}>
								<div className="hover:scale-105 cursor-pointer flex items-center lg:text-[dodgerblue] duration-300 lg:bg-white bg-blue-600 p-3 lg:w-1/3 md:w-2/5 text-white gap-2 rounded-lg mt-5">
									Register
									<div className="hidden lg:flex">
										<ArrowForwardOutline color="dodgerblue" height="20px" width="20px" />
									</div>
									<div className="lg:hidden">
										<ArrowForwardOutline color="white" height="20px" width="20px" />
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCTA;
