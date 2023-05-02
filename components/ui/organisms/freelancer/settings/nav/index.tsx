import React, { useState } from "react";
import * as ReactIcons from "react-ionicons";

const FreelancerSettingsNav = ({
	props: {
		links,
		activeLink,
		setActiveLink = (value: string) => {
			return value;
		},
	},
	children,
}: {
	props: {
		activeLink: string;
		setActiveLink: Function;
		links: { title: string; icon: string }[];
	};
	children: any;
}) => {
	const LinkChild = ({ link }: any) => {
		interface IconType {
			[key: string]: React.ElementType;
		}
		const IconComponent: IconType = ReactIcons;
		const IconComp = IconComponent[link.icon];

		return (
			<li
				onClick={() => setActiveLink(link.title)}
				className={`${
					activeLink === link.title ? "text-[dodgerblue]" : "text-[#666]"
				} relative capitalize hover:text-[dodgerblue] group text-sm flex items-center cursor-pointer gap-1 pb-3`}
			>
				{link.icon && (
					<div className="">
						<div className="hidden group-hover:flex">
							<IconComp color="dodgerblue" />
						</div>
						<div className="flex group-hover:hidden">
							{activeLink === link.title ? (
								<IconComp color="dodgerblue" />
							) : (
								<IconComp color="#666" />
							)}
						</div>
					</div>
				)}
				<span className="font-semibold">
					{link.title.split("-").join(" ")}
					<span
						className={`${
							activeLink === link.title && "bg-[dodgerblue] "
						} group-hover:bg-[dodgerblue] bottom-0 p-[0.8px] absolute w-full left-0 -z-10`}
					></span>
				</span>
			</li>
		);
	};
	return (
		<div>
			<h1></h1>
			<ul className="grid grid-cols-2 sm:grid-cols-3 xl:flex md:gap-8 gap-5 text-center border-b-[1px]">
				{links.map((link, i) => {
					return <LinkChild key={i} link={link} />;
				})}
			</ul>
			<div>{children}</div>
		</div>
	);
};

export default FreelancerSettingsNav;
