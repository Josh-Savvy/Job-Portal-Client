import Link from "next/link";
import React from "react";
import {
	ArrowForwardOutline,
	LogoFacebook,
	LogoInstagram,
	LogoTwitter,
	LogoYoutube,
} from "react-ionicons";
import { employerLinks, freelancerLinks } from "./footerLinks";

const Footer = () => {
	return (
		<div className="z-30 md:px-16 px-8 pt-16 md:pt-24 relative pb-10 bg-zinc-900 text-zinc-400 divide-y-[1px] divide-zinc-800">
			<div className="grid md:grid-cols-2 gap-1">
				<div className="">
					<div className="md:pr-28 grid gap-4">
						<Link href="/">
							<h1 className="text-white font-bold text-2xl relative cursor-pointer w-28">
								FindJob
								<span className="bg-blue-500 p-1 rounded-full absolute bottom-2 right-3"></span>
							</h1>
						</Link>
						<h1 className="flex items-center gap-1 text-zinc-400">
							Call now:
							<Link href="tel:+2348111994693">
								<span className="text-white font-semibold cursor-pointer">
									+234-811 1994 693
								</span>
							</Link>
						</h1>
						<p className="text-zinc-400 pr-10 text-sm">
							6391 Elgin St. Celina, Delaware 10299, New York, United States of America
						</p>
					</div>
				</div>
				<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-16 md:mt-0 mt-8">
					<div className="">
						<h1 className="text-white text-xl font-semibold">Quick Links</h1>
						<ul className="grid gap-3 mt-3">
							<Link href="/">
								<li className="cursor-pointer duration-300 hover:text-white flex gap-1 items-center group">
									<div className="animate__animated hidden group-hover:flex animate__slideInLeft animate__faster">
										<ArrowForwardOutline color="white" />
									</div>
									About
								</li>
							</Link>
							<Link href="/">
								<li className="cursor-pointer duration-300 hover:text-white flex gap-1 items-center group">
									<div className="animate__animated hidden group-hover:flex animate__slideInLeft animate__faster">
										<ArrowForwardOutline color="white" />
									</div>
									Contact
								</li>
							</Link>
						</ul>
					</div>
					<div className="">
						<h1 className="text-white text-xl font-semibold">Freelancers</h1>
						<ul className="grid gap-3 mt-3">
							{freelancerLinks.map((link, i) => {
								return (
									<Link href={link.link ? link.link : "#"} key={i}>
										<li className="cursor-pointer duration-300 hover:text-white flex gap-1 items-center group">
											<div className="animate__animated hidden group-hover:flex animate__slideInLeft animate__faster">
												<ArrowForwardOutline color="white" />
											</div>
											{link.title}
										</li>
									</Link>
								);
							})}
						</ul>
					</div>
					<div className="">
						<h1 className="text-white text-xl font-semibold">Employers</h1>
						<ul className="grid gap-3 mt-3">
							{employerLinks.map((link, i) => {
								return (
									<Link href={link.link ? link.link : "#"} key={i}>
										<li className="cursor-pointer duration-300 hover:text-white flex gap-1 items-center group">
											<div className="animate__animated hidden group-hover:flex animate__slideInLeft animate__faster">
												<ArrowForwardOutline color="white" />
											</div>
											{link.title}
										</li>
									</Link>
								);
							})}
						</ul>
					</div>
					<div className="">
						<h1 className="text-white text-xl font-semibold">Support</h1>
						<ul className="grid gap-3 mt-3">
							<Link href="/">
								<li className="cursor-pointer duration-300 hover:text-white flex gap-1 items-center group">
									<div className="animate__animated hidden group-hover:flex animate__slideInLeft animate__faster">
										<ArrowForwardOutline color="white" />
									</div>
									Faqs
								</li>
							</Link>
							<Link href="/">
								<li className="cursor-pointer duration-300 hover:text-white flex gap-1 items-center group">
									<div className="animate__animated hidden group-hover:flex animate__slideInLeft animate__faster">
										<ArrowForwardOutline color="white" />
									</div>
									Privacy & Policy
								</li>
							</Link>
							<Link href="/">
								<li className="cursor-pointer duration-300 hover:text-white flex gap-1 items-center group">
									<div className="animate__animated hidden group-hover:flex animate__slideInLeft animate__faster">
										<ArrowForwardOutline color="white" />
									</div>
									Terms & Conditions
								</li>
							</Link>
							<Link href="/">
								<li className="cursor-pointer duration-300 hover:text-white flex gap-1 items-center group">
									<div className="animate__animated hidden group-hover:flex animate__slideInLeft animate__faster">
										<ArrowForwardOutline color="white" />
									</div>
									Refund Policy
								</li>
							</Link>
							{/* <li>Pricing</li> */}
							{/* <li>Blog</li> */}
						</ul>
					</div>
				</div>
			</div>
			<div className="md:flex grid justify-between mt-8 items-center">
				<p className="pt-5 md:pt-0">© FindJob 2023 | All Rights Reserved</p>
				<ul className="flex items-center gap-3 pt-6">
					<Link href="#">
						<li className="cursor-pointer">
							<LogoFacebook color="white" />
						</li>
					</Link>
					<Link href="#">
						<li className="cursor-pointer">
							<LogoYoutube color="white" />
						</li>
					</Link>
					<Link href="#">
						<li className="cursor-pointer">
							<LogoInstagram color="white" />
						</li>
					</Link>
					<Link href="#">
						<li className="cursor-pointer">
							<LogoTwitter color="white" />
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
