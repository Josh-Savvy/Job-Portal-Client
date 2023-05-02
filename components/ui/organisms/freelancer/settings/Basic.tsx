import Image from "next/image";
import React from "react";
import { Link, TrashBinOutline } from "react-ionicons";

const FreelancerBasicProfileSetting = () => {
	return (
		<div className="">
			<h1 className="mb-5">Basic information</h1>
			<div className="grid sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-3">
				<div className="grid gap-2">
					<h1 className="text-zinc-600 text-sm mb-4">Profile Picture</h1>
					<div className="rounded max-h-[100%] max-w-[100%] relative">
						<Image
							src="/images/default_image.png"
							alt="dfgf"
							height={130}
							className="h-full object-contain w-full"
							width={130}
							layout="responsive"
						/>
						<div className="absolute top-0 right-0 bg-white p-3 cursor-pointer hover:bg-zinc-300 rounded-bl-lg duration-300">
							<TrashBinOutline color="red" />
						</div>
					</div>
				</div>
				<div>
					<div className="grid mb-4">
						<h1 className="text-zinc-600 text-sm mb-4">Full Name</h1>
						<input className="text-sm p-2 px-3 bg-white rounded outline-none border" />
					</div>
					<div className="grid">
						<h1 className="text-zinc-600 text-sm mb-4">Experience Level</h1>
						<select
							id="small"
							className="block w-full p-2 mb-6 text-sm rounded-lg bg-white-50 focus:ring-blue-200 outline-none"
						>
							<option selected>Select</option>
							<option value="Fresher">Fresher</option>
							<option value="1 year">1 year</option>
							<option value="2 Years">2 Years</option>
							<option value="5+ Years">5+ Years</option>
							<option value="8+ Years">8+ Years</option>
							<option value="10+ Years">10+ Years</option>
						</select>
					</div>
					<div className="grid">
						<h1 className="text-zinc-600 text-sm mb-3">Personal Website</h1>
						<div className="relative bg-white p-1 flex items-center">
							<div className="absolute left-0 px-3">
								<Link />
							</div>
							<input className="ml-5 text-sm p-2 px-3 bg-transparent rounded outline-none border-none" />
						</div>
					</div>
				</div>
				<div>FreelancerBasicProfileSetting</div>
			</div>
		</div>
	);
};

export default FreelancerBasicProfileSetting;
