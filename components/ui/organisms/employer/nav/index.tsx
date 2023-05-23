import Link from "next/link";
import React from "react";
import * as ReactIcons from "react-ionicons";
import { logout, removeLocalStorage } from "../../../../../utils/auth";
import { AccountType, UserType } from "../../../../../interfaces/user.type";

const EmployerDashboardNav = ({
	props: {
		isMobileOpen,
		closeMobileNav,
		links,
		activeLink,
		router,
		userRole,
		user,
		setActiveLink = (value: string) => {
			return value;
		},
	},
	children,
}: {
	props: {
		isMobileOpen: boolean;
		router: any;
		activeLink: string;
		closeMobileNav: Function;
		setActiveLink: Function;
		userRole?: AccountType;
		user: UserType;
		links: { title: string; link: string; icon: string }[];
	};
	children: any;
}) => {
	const LinkChild = ({
		title,
		icon,
		link,
		router,
	}: {
		title: string;
		icon: string;
		link: string;
		router: any;
	}) => {
		interface IconType {
			[key: string]: React.ElementType;
		}
		const IconComponent: IconType = ReactIcons;
		const IconComp = IconComponent[icon];

		return (
			<Link href={link}>
				<li
					onClick={() => {
						setActiveLink(link);
						closeMobileNav();
					}}
					className={`${
						router.asPath.split("#")[1] === link || activeLink === link
							? "border-l-4 border-blue-600 bg-blue-50"
							: ""
					} text-center lg:rounded-bl-xl lg:rounded-tl-xl px-8 duration-300 hover:bg-blue-50 cursor-pointer p-3 w-full flex items-center gap-3`}
				>
					{icon && <IconComp />} {title}
				</li>
			</Link>
		);
	};
	return (
		<div className="relative w-full lg:z-40">
			<div className="flex">
				<div
					className={`${
						isMobileOpen ? "translate-x-0" : "translate-x-[-200%]"
					} fixed lg:translate-x-0 z-50 pt-28 left-0 lg:w-[35%] w-[85%] 
				bg-white h-full top-0 transition-all duration-300`}
				>
					<div className="lg:ml-16 mx-5 lg:mx-0">
						<h1 className="text-sm text-zinc-500 mb-5 flex items-center gap-1 cursor-default">
							My Dashboard
						</h1>
						<ul className="grid gap-2 transition-all">
							{links.map((link, i) => {
								return (
									<LinkChild
										router={router}
										icon={link.icon}
										title={link.title}
										key={i}
										link={link.link}
									/>
								);
							})}
							<li
								onClick={() => {
									logout(() => {
										removeLocalStorage("user");
										router.replace("/login");
									});
								}}
								className="text-center group hover:font-semibold px-8 duration-300 bg-red-500 
							hover:bg-red-700 text-white cursor-pointer p-3 rounded-xl w-3/5 flex items-center 
							gap-3 lg:mt-20"
							>
								<ReactIcons.LogInOutline color="white" />
								Log Out
							</li>
						</ul>
					</div>
				</div>
				<div
					className="fixed px-5 pt-28 right-0 lg:w-[65%] w-full bg-blue-50 h-full py-4 pb-10 top-0 
				overflow-y-scroll z-40"
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default EmployerDashboardNav;
