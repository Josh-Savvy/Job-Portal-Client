import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../buttons";
import { Checkmark, CloseOutline, EyeOutline } from "react-ionicons";
import Link from "next/link";

const JobCard = ({
	company,
	location,
	jobNature,
	salary,
	dateApplied,
	status,
	slug,
	imgSrc,
}: {
	company: string;
	location: string;
	jobNature: string;
	salary: string;
	dateApplied: string;
	status: boolean;
	slug: string;
	imgSrc?: string;
}) => {
	return (
		<div>
			<div
				className="grid md:grid-cols-2 pb-3 items-center hover:shadow-lg cursor-default hover:shadow-blue-200 rounded-lg 
        hover:border-blue-500 px-3 pr-5 duration-300 border-2 border-blue-100 "
			>
				<div className="flex gap-3 items-center">
					<div className="flex items-center h-full w-auto rounded-lg">
						<Image
							src={imgSrc ? imgSrc : "/images/default_image.png"}
							alt="skd"
							height={100}
							width={100}
							className="object-contain h-full w-full rounded-xl"
						/>
					</div>
					<div className="grid md:grid-cols-none sm:grid-cols-2 md:gap-5 gap-10 text-sm">
						<div className="flex gap-2 items-center">
							<p className="font-bold">{company}</p>
							<p className="text-center p1 px-3 bg-blue-100 rounded-lg">{jobNature}</p>
						</div>
						<div className="flex gap-2 items-center">
							<p>{location}</p> |<p className="text-zinc-500">Salary: {salary}</p>
						</div>
					</div>
				</div>
				
				<div className="flex justify-between items-center text-sm">
					<p>{dateApplied}</p>
					{status ? (
						<p className="flex items-center text-green-500 gap-2">
							<Checkmark color="#22c55e" height="23px" width="23px" />
							Active
						</p>
					) : (
						<p className="flex items-center text-[red] gap-2">
							<CloseOutline color="red" height="23px" width="23px" />
							Expired
						</p>
					)}
					<Link href={`/jobs/${slug}`}>
						<div className="flex items-center">
							<PrimaryButton
								title="Details"
								link="#"
								icon={<EyeOutline height="15px" width="15px" color="white" />}
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default JobCard;
