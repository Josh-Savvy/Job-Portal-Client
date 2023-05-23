import React from "react";
import { HomeHeroSvg1 } from "../../../atoms/icons";
import { JobSearchForm } from "../../../atoms/forms/JobSearchForm";
import Link from "next/link";
import StatsComponent from "./statsComponent";
import { IndustryType } from "../../../../../interfaces/user.type";

const Hero = (...props: any) => {
	const { industriesData }: { industriesData: IndustryType[] } = props[0];

	return (
		<div className="lg:pt-24 pt-20 bg-zinc-100 md:px-14 px-7 h-[150vh]">
			<div className="lg:flex items-center justify-between pt-10 lg:pt-20">
				<div className="grid items-center gap-4">
					<h1 className="lg:text-4xl md:pr-40 lg:pr-52 text-3xl font-semibold animate__animated animate__fadeInDown">
						Find a job that suits your interest & skills.
					</h1>
					<p className="animate__animated animate__fadeInUp">
						Find the Perfect Jobs, Employment & Career Opportunities.
					</p>
					<div className="grid gap-4 lg:mr-16 animate__animated animate__fadeInUp">
						<JobSearchForm />
						<ul className="lg:flex hidden gap-3 items-center text-sm">
							<h1 className="">Suggestion: </h1>
							{industriesData?.slice(0, 3).map((cat: any, i: any) => {
								return (
									<Link href={`/jobs/category?${cat?.slug}`} key={i}>
										<li className="cursor-pointer duration-300 hover:text-[blue]">
											{cat.title},
										</li>
									</Link>
								);
							})}
							<li className="cursor-pointer duration-300 hover:text-[blue]">
								Others.
							</li>
						</ul>
					</div>
				</div>
				<div className="hidden xl:flex">
					<HomeHeroSvg1 />
				</div>
			</div>
			<div className="lg:mt-48 mt-20">
				<StatsComponent {...props} />
			</div>
		</div>
	);
};

export default Hero;
