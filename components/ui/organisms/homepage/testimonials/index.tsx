import React from "react";
import Slider from "react-slick";
import { testimonialData } from "./data";
import Image from "next/image";

const Testimonials = () => {
	const settings = {
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		pauseOnHover: true,
		speed: 1000,
		arrows: false,
		adaptiveHeight: true,
		dots: false,
	};

	const TestimonialCard = ({
		name,
		comment,
		position,
		company,
		imgSrc,
	}: any) => {
		return (
			<div className="md:flex justify-center w-full">
				<div className="bg-white shadow-lg border-y-2 border-yellow-100 shadow-yellow-100 py-8 rounded-lg p-5 mr-10 md:w-4/5 w-full">
					<div className="flex justify-center">
						<div className="grid gap-3 p-2">
							<div></div>
							<p className="p-5 text-center md:text-2xl lg:text-3xl text-lg">
								“ {comment} ”
							</p>
							<div className="mt-8">
								<div className="flex justify-center">
									<div className="flex items-center gap-5">
										<div className="w-auto h-auto">
											<Image
												src={imgSrc ? imgSrc : "/images/default_image.png"}
												alt={imgSrc}
												height={100}
												width={100}
												className="w-full h-auto object-cover rounded-full bg-zinc-300"
											/>
										</div>
										<div className="font-semibold hover:text-blue-500 duration-300 cursor-pointer">
											{name}
										</div>
										<div className="text-zinc-500">{position}</div>
										<div className="text-zinc-500">{company}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
	return (
		<div className="md:px-14 px-7 pt-14 md:pt-28 mt-5 pb-10 bg-zinc-100">
			<h1 className="md:text-3xl text-center text-lg font-semibold">Testimonials</h1>
			<div className="mt-10 lg:mx-8">
				<Slider {...settings}>
					{testimonialData.map((testimonial, i) => {
						return (
							<TestimonialCard
								key={i}
								name={testimonial.name}
								comment={testimonial.testimonial}
								company={testimonial.company}
								position={testimonial.position}
								imgSrc={testimonial.imgSrc}
							/>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Testimonials;
