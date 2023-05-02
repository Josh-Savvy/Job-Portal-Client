import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
	ArrowForwardOutline,
	BriefcaseOutline,
	CloudUploadOutline,
	PersonAddOutline,
	SearchOutline,
} from "react-ionicons";

const OurWorkingProcess = () => {
	return (
		<div className="md:px-14 px-7 pt-14 md:pt-28 mt-5 lg:mt-10 bg-zinc-100">
			<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
				<h1 className="md:text-3xl text-2xl text-center font-semibold">
					Our <span className="text-[blue]">Working</span> Process
				</h1>
				<div className="grid lg:grid-cols-4 gap-2 pt-10 pb-10">
					<div className="group cursor-default relative">
						<div className="p-6 py-8 rounded-lg flex justify-center items-center group-hover:bg-white duration-300">
							<div className="grid gap-1">
								<div className="flex items-center justify-center">
									<div className="flex group-hover:hidden bg-white rounded-full p-4">
										<PersonAddOutline height="40px" width="40px" color="dodgerblue" />
									</div>
									<div className="hidden group-hover:flex bg-[dodgerblue] duration-300 rounded-full p-4">
										<PersonAddOutline height="40px" width="40px" color="white" />
									</div>
								</div>
								<div className="text-center text-lg capitalize">Create account</div>
								<div className="text-center text-sm text-zinc-500">
									Aliquam facilisis egestas sapien, nec tempor leo tristique at.
								</div>
							</div>
						</div>
						<div className="hidden duration-300 lg:group-hover:block absolute top-20 -right-1 animate__animated animate__fadeInLeft animate__infinite">
							<ArrowForwardOutline color="dodgerblue" height="35px" width="35px" />
						</div>
					</div>
					<div className="group cursor-default relative">
						<div className="p-6 py-8 rounded-lg flex justify-center items-center group-hover:bg-white duration-300">
							<div className="grid gap-1">
								<div className="flex items-center justify-center">
									<div className="flex group-hover:hidden bg-white rounded-full p-4">
										<CloudUploadOutline height="40px" width="40px" color="dodgerblue" />
									</div>
									<div className="hidden group-hover:flex bg-[dodgerblue] duration-300 rounded-full p-4">
										<CloudUploadOutline height="40px" width="40px" color="white" />
									</div>
								</div>
								<div className="text-center text-lg capitalize">Upload Cv/Resume</div>
								<div className="text-center text-sm text-zinc-500">
									Aliquam facilisis egestas sapien, nec tempor leo tristique at.
								</div>
							</div>
						</div>
						<div className="hidden duration-300 lg:group-hover:block absolute top-20 -right-1 animate__animated animate__fadeInLeft animate__infinite">
							<ArrowForwardOutline color="dodgerblue" height="35px" width="35px" />
						</div>
					</div>
					<div className="group cursor-default relative">
						<div className="p-6 py-8 rounded-lg flex justify-center items-center group-hover:bg-white duration-300">
							<div className="grid gap-1">
								<div className="flex items-center justify-center">
									<div className="flex group-hover:hidden bg-white rounded-full p-4">
										<SearchOutline height="40px" width="40px" color="dodgerblue" />
									</div>
									<div className="hidden group-hover:flex bg-[dodgerblue] duration-300 rounded-full p-4">
										<SearchOutline height="40px" width="40px" color="white" />
									</div>
								</div>
								<div className="text-center text-lg capitalize">
									Find a suitable job
								</div>
								<div className="text-center text-sm text-zinc-500">
									Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales
								</div>
							</div>
						</div>
						<div className="hidden duration-300 lg:group-hover:block absolute top-20 -right-1 animate__animated animate__fadeInLeft animate__infinite">
							<ArrowForwardOutline color="dodgerblue" height="35px" width="35px" />
						</div>
					</div>
					<div className="group cursor-default">
						<div className="p-6 py-8 rounded-lg flex justify-center items-center group-hover:bg-white duration-300">
							<div className="grid gap-1">
								<div className="flex items-center justify-center">
									<div className="flex group-hover:hidden bg-white rounded-full p-4">
										<BriefcaseOutline height="40px" width="40px" color="dodgerblue" />
									</div>
									<div className="hidden group-hover:flex bg-[dodgerblue] duration-300 rounded-full p-4">
										<BriefcaseOutline height="40px" width="40px" color="white" />
									</div>
								</div>
								<div className="text-center text-lg capitalize">Apply for Job</div>
								<div className="text-center text-sm text-zinc-500">
									Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales
								</div>
							</div>
						</div>
					</div>
				</div>
			</AnimationOnScroll>
		</div>
	);
};

export default OurWorkingProcess;
