import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
	ArrowForwardOutline,
	BriefcaseOutline,
	LocationOutline,
} from "react-ionicons";
import FeaturedEmployersCardType from "../../../../interfaces/cards/FeaturedEmployersCard.type";
import Image from "next/image";
import { OutlinedButton2 } from "../buttons";
import Link from "next/link";

const FeaturedEmployersCard = ({
	company,
	location,
	minNumberOfEmployees,
	maxNumberOfEmployees,
	imgSrc,
	openPositions,
	link = "/",
}: FeaturedEmployersCardType) => {
	return (
		<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
			<div className="bg-white xl:h-48 lg:h-52 md:h-56 hover:shadow-lg hover:shadow-blue-200 border border-zinc-400 hover:border-blue-600 duration-300 rounded-lg p-4">
				<div className="flex items-center md:gap-3 lg:gap-10">
					<div className="h-auto w-auto">
						<Image
							src={imgSrc ? imgSrc : "/images/default_image.png"}
							alt={imgSrc}
							className="w-full h-full"
							height={80}
							width={80}
						/>
					</div>
					<div className="grid gap-2">
						<h1 className="text-lg cursor-pointer hover:text-blue-800 hover:underline decoration duration-300">
							<Link href={`/employer/${company}`}>{company}</Link>
						</h1>
						<p className="flex items-center gap-1.5 text-sm text-zinc-400">
							<LocationOutline color="grey" width="20px" height="20px" />
							{location}
						</p>
						<p className="flex items-center gap-1.5 text-sm text-zinc-400">
							{!maxNumberOfEmployees && minNumberOfEmployees ? (
								<>
									<BriefcaseOutline color="grey" width="20px" height="20px" />
									{minNumberOfEmployees}+ employees
								</>
							) : minNumberOfEmployees && maxNumberOfEmployees ? (
								<>
									<BriefcaseOutline color="grey" width="20px" height="20px" />
									{minNumberOfEmployees} - {maxNumberOfEmployees} employees
								</>
							) : (
								""
							)}
						</p>
					</div>
				</div>
				{openPositions?.length >= 1 ? (
					<div className="flex justify-center items-center mt-6">
						<OutlinedButton2 title="Open positions" link={link} />
					</div>
				) : (
					<div className="flex justify-center items-center mt-4 text-red-500">
						No Open Positions.
					</div>
				)}
			</div>
		</AnimationOnScroll>
	);
};

export default FeaturedEmployersCard;
