import React from "react";
import { HomeHeroSvg1 } from "../../../atoms/icons";
import { HomeHeroJobSearchForm } from "../../../atoms/forms";
import Link from "next/link";
import StatsComponent from "./statsComponent";

const Hero = () => {
	return (
		<div className="lg:pt-24 pt-20 bg-zinc-100 md:px-14 px-7 h-[120vh]">
			<div className="lg:flex items-center justify-between pt-10 lg:pt-20">
				<div className="grid items-center gap-4">
					<h1 className="lg:text-4xl md:pr-40 lg:pr-52 text-3xl font-semibold">
						Find a job that suits your interest & skills.
					</h1>
					<p>Find the Perfect Jobs, Employment & Career Opportunities.</p>

					<div className="grid gap-4 lg:mr-16">
						<HomeHeroJobSearchForm />
						<ul className="lg:flex hidden gap-3 items-center text-sm">
							<h1 className="">Suggestion: </h1>
							<li className="cursor-pointer duration-300 hover:text-[blue]">
								<Link href="#">Law/Legal, </Link>
							</li>
							<li className="cursor-pointer duration-300 hover:text-[blue]">
								<Link href="#">IT & Telecommunication, </Link>
							</li>
							<li className="cursor-pointer duration-300 hover:text-[blue]">
								<Link href="#">Engineer/Architects, </Link>
							</li>
							<li className="cursor-pointer duration-300 hover:text-[blue]">
								<Link href="#">Medical/Pharma, </Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="hidden xl:flex">
					<HomeHeroSvg1 />
				</div>
			</div>
			<div className="lg:mt-48 mt-20">
				<StatsComponent />
			</div>
		</div>
	);
};

export default Hero;
