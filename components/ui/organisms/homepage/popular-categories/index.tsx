import React from "react";
import { OutlinedButton1 } from "../../../atoms/buttons";
import * as ReactIcons from "react-ionicons";
import { categoryData } from "./data";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IndustryType } from "../../../../../interfaces/user.type";

const PopularCategories = (props: any) => {
	const CategoryComp = ({
		title,
		numberOfOpenPositions,
		slug,
		icon,
	}: {
		title: string;
		numberOfOpenPositions: number;
		slug: string;
		icon: string;
	}) => {
		interface IconType {
			[key: string]: React.ElementType;
		}

		const IconComponent: IconType = ReactIcons;
		const IconComp = IconComponent[icon];
		return (
			<AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
				<Link href={`/jobs/category?${slug}`}>
					<div className="rounded-lg p-5 group cursor-pointer duration-300 hover:bg-white hover:shadow-blue-300 hover:shadow-lg flex gap-5 items-center">
						<div className="group-hover:flex hidden bg-blue-100 group-hover:bg-blue-500 duration-300 rounded-lg p-6">
							{icon ? <IconComp height="35px" width="35px" color="white" /> : ""}
						</div>
						<div className="group-hover:hidden flex bg-blue-100 group-hover:bg-blue-500 duration-300 rounded-lg p-6">
							{icon ? <IconComp height="35px" width="35px" color="blue" /> : ""}
						</div>
						<div className="grid gap-3">
							<h1 className="break-words text-[18px]">{title}</h1>
							<p className="text-[15px]">
								<span className="font-semibold">{numberOfOpenPositions}</span> Open
								Position(s)
							</p>
						</div>
					</div>
				</Link>
			</AnimationOnScroll>
		);
	};
	const { industriesData }: { industriesData: IndustryType[] } = props;
	return (
		<div className="md:px-14 px-7 pt-10 md:pt-24 bg-white">
			<div className="flex items-center justify-between">
				<h1 className="lg:text-3xl text-2xl">Popular Categories</h1>
				<div>
					<OutlinedButton1
						title="View all Jobs"
						icon={<ReactIcons.ArrowForwardOutline color="dodgerblue" />}
						link="/jobs"
					/>
				</div>
			</div>
			<div className="flex justify-center mt-8">
				<div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 gap-5">
					{industriesData?.map((category, i) => {
						return (
							<CategoryComp
								key={i}
								title={category.title}
								numberOfOpenPositions={
									category.jobs?.length ? category.jobs?.length : 0
								}
								slug={category.slug}
								icon={category.icon}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default PopularCategories;
