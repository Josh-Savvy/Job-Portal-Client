import {
	ArrowForwardOutline,
	BookmarkOutline,
	CalendarOutline,
	LocationOutline,
	WalletOutline,
} from "react-ionicons";
import { DangerButton, OutlinedButton2 } from "../buttons";
import Image from "next/image";
import FeaturedJobCardType from "../../../../interfaces/cards/FeaturedJobCard.type";
import { AnimationOnScroll } from "react-animation-on-scroll";

const FeaturedJobCard = ({
	imgSrc,
	category,
	date,
	jobType,
	location,
	salary,
	status,
	title,
	slug,
}: FeaturedJobCardType) => {
	return (
		<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
			<div
				className={`hover:shadow-lg w-full rounded-lg lg:p-8 p-6 hover:outline-blue-500 border hover:outline-[1.5px] duration-300 ${
					status
						? "bg-white hover:shadow-blue-100"
						: "bg-red-50 hover:shadow-red-100"
				}`}
			>
				<div className="lg:flex lg:justify-between items-center grid md:gap-8 gap-8 w-full">
					<div className="md:flex grid items-center md:gap-5 gap-10 cursor-default md:w-full lg:w-auto">
						<div className="w-auto h-auto flex justify-center md:justify-normal">
							<Image
								src={imgSrc}
								className="w-full h-full"
								height={150}
								width={150}
								alt={imgSrc}
							/>
						</div>
						<div className="grid gap-3">
							<div className="flex items-center gap-3">
								<h1 className="lg:text-xl w-1/2 md:w-auto font-semibold text-lg">
									{title}
								</h1>
								<div className="flex items-center md:gap-4 gap-2">
									<span className="capitalize bg-blue-100 rounded-xl p-1 px-4 text-xs w-full">
										{jobType}
									</span>
									<span className="capitalize bg-yellow-100 rounded-xl p-1 px-4 text-xs">
										{category}
									</span>
								</div>
							</div>
							<div className="flex gap-3 lg:gap-4 items-center text-sm w-full">
								<div className="flex gap-1 items-center">
									<LocationOutline width="25px" height="25px" /> {location}
								</div>
								<div className="flex gap-1 items-center w-full">
									<WalletOutline width="25px" height="25px" /> {salary}
								</div>
								<div className="flex gap-1 items-center w-full">
									<CalendarOutline width="25px" height="25px" /> {date}
								</div>
							</div>
						</div>
					</div>

					<div className="flex items-center gap-2">
						{status ? (
							<div className="hover:bg-blue-50 duration-300 p-3 cursor-pointer rounded">
								<BookmarkOutline color="blue" height="25px" width="25px" />
							</div>
						) : (
							""
						)}
						{status ? (
							<div className="w-full">
								<OutlinedButton2
									title="Apply Now"
									link={`/jobs/${slug}`}
									icon={
										<>
											<div className="hidden group-hover:flex">
												<ArrowForwardOutline color="white" height="25px" width="25px" />
											</div>
											<div className="flex group-hover:hidden">
												<ArrowForwardOutline
													color="dodgerblue"
													height="25px"
													width="25px"
												/>
											</div>
										</>
									}
								/>
							</div>
						) : (
							<div className="w-full">
								<DangerButton title="Closed" />
							</div>
						)}
					</div>
				</div>
			</div>
		</AnimationOnScroll>
	);
};
export default FeaturedJobCard;
