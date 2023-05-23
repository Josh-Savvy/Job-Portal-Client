import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../buttons";
import {
	ListOutline,
	CashOutline,
	Checkmark,
	CloseOutline,
	EyeOutline,
	LocationOutline,
} from "react-ionicons";
import Link from "next/link";

const JobCard = ({
	company,
	location,
	jobNature,
	salary,
	dateCreated,
	status,
	slug,
	imgSrc,
}: {
	company: string;
	location: string;
	jobNature: string;
	salary: string;
	dateCreated: string;
	status: boolean;
	slug: string;
	imgSrc?: string;
}) => {
	return (
		<Link href={`/jobs/${slug}`}>
			<div
				className="animate__animated animate__fadeInUp cursor-pointer flex items-start hover:shadow-lg 
				cursor-default hover:shadow-blue-200 rounded-lg hover:border-blue-500 duration-300 border 
				border-[#f5f5f5] shadow gap-4"
			>
				<div className="md:flex grid gap-3 items-center w-2/5">
					<div className="flex items-center h-40 md:w-auto w-full rounded-lg">
						<img
							src={imgSrc ? imgSrc : "/images/default_image.png"}
							alt={company}
							className={
								imgSrc
									? "object-cover h-full w-full rounded"
									: "object-contain h-full w-full rounded"
							}
						/>
					</div>
				</div>
				<div className="pb-3 pt-5 md:pt-3 grid gap-2">
					<div className="xl:flex grid gap-2 md:mt-5 justify-between">
						<h1 className="font-medium text-lg flex items-center gap-2">
							{company}
							<span className="text-xs bg-green-200 text-green-900 px-2 rounded">
								{jobNature}
							</span>
						</h1>
						<div className="text-xs">
							<p className="flex items-center gap-1">
								<LocationOutline /> {location}
							</p>
						</div>
					</div>
					<div className="flex items-center text-xs">
						<p className="flex items-center gap-2 text-zinc-500">
							<CashOutline /> Salary: {salary}
						</p>
					</div>
					<p className="text-zinc-400 text-xs flex items-center gap-2">
						<ListOutline /> Posted {dateCreated}
					</p>
					{status ? (
						<p className="flex items-center text-green-500 gap-2 text-xs">
							<Checkmark color="#22c55e" />
							Active
						</p>
					) : (
						<p className="flex items-center text-[red] gap-2 text-xs">
							<CloseOutline color="red" />
							Expired
						</p>
					)}
				</div>
			</div>
		</Link>
	);
};

export default JobCard;
