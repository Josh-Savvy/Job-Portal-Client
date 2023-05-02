import React from "react";
import { OutlinedButton1 } from "../../components/ui/atoms/buttons";
import Link from "next/link";

const ForgotPassword = () => {
	return (
		<form className="relative min-h-screen bg-blue-50 flex justify-center items-center">
			<div className="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 transform rotate-45 hidden md:block"></div>
			<div className="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 right-10 transform md:block rotate-12 hidden"></div>
			<div className="py-12 px-12 bg-white md:rounded-2xl shadow-xl">
				<div>
					<h1 className="text-3xl font-bold text-center mb-4">Reset Password</h1>
					<p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide">
						Recover your account.
					</p>
				</div>
				<div className="space-y-4">
					<input
						required
						type="email"
						placeholder="Email Address"
						className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
					/>
				</div>
				<div className="text-center mt-6">
					<button className="py-2 w-64 text-xl text-white bg-blue-400 hover:bg-blue-600 duration-300 rounded-lg">
						Submit
					</button>
				</div>
				<div className="flex justify-center mt-5">
					<OutlinedButton1 title="Back Home" link="/" />
				</div>
			</div>
			<div className="w-40 h-40 absolute bg-blue-300 rounded-full top-0 right-12 hidden md:block"></div>
			<div className="w-20 h-40 absolute bg-blue-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
		</form>
	);
};

export default ForgotPassword;
