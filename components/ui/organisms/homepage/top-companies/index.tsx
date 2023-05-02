import React from "react";
import { OutlinedButton1 } from "../../../atoms/buttons";
import { ArrowForwardOutline } from "react-ionicons";
import FeaturedEmployersCard from "../../../atoms/cards/FeaturedEmployersCard";
import { companyData } from "./data";

const TopCompanies = () => {
	return (
		<div className="md:px-14 px-7 pt-14 md:pt-28 mt-5 pb-10">
			<div className="flex justify-between items-center">
				<h1 className="md:text-3xl text-2xl font-semibold">
					Top <span className="text-[blue]">Employers</span>
				</h1>
				<div className="">
					<OutlinedButton1
						title="View all"
						icon={
							<ArrowForwardOutline color="dodgerblue" width="25px" height="25px" />
						}
					/>
				</div>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
				{companyData.map((company, i) => {
					return company.topEmployer ? (
						<FeaturedEmployersCard
							key={i}
							company={company.company}
							minNumberOfEmployees={company.minNumberOfEmployees}
							maxNumberOfEmployees={company.maxNumberOfEmployees}
							location={company.location}
							link={company.link}
							imgSrc={company.imgSrc}
							openPositions={company.openPositions}
						/>
					) : (
						""
					);
				})}
			</div>
		</div>
	);
};

export default TopCompanies;
