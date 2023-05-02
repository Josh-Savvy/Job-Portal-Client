import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { EyeOffOutline, EyeOutline } from "react-ionicons";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const formDetails = {
		email: "",
		password: "",
	};
	const [formState, setFormState] = useState(formDetails);
	const { email, password } = formState;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (!email || !password) {
			toast.error("Invalid Credentials!", {
				position: "top-center",
				theme: "light",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return new Error("Invalid Credentials!");
		}
		try {
			console.table(formState);
			setFormState(formDetails);
			router.replace("/freelancer/dashboard");
		} catch (error: any) {
			console.log(error);
			if (error?.response?.status === 400) {
				toast.error(
					`${
						error.response?.data?.message
							? error.response?.data?.message
							: "Oops! An error occured. Please try again!"
					}`,
					{
						position: "top-center",
						theme: "light",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					},
				);
			}
			setFormState(formDetails);
		}
	};
	return (
		<form
			autoComplete="false"
			onSubmit={handleSubmit}
			className="relative min-h-screen bg-blue-50 flex justify-center items-center"
		>
			<ToastContainer />
			<div className="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 transform rotate-45 hidden md:block"></div>
			<div className="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 right-10 transform md:block rotate-12 hidden"></div>
			<div className="py-12 px-12 bg-white md:rounded-2xl shadow-xl">
				<div>
					<h1 className="text-3xl font-bold text-center mb-4">Log In</h1>
					<p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide">
						Log into your account.
					</p>
				</div>
				<div className="space-y-4">
					<input
						autoComplete="off"
						type="text"
						name="email"
						value={email}
						onChange={handleChange}
						placeholder="Email Address or Username"
						className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
					/>
					<div className="relative border p-2 rounded-lg flex items-center">
						<input
							autoComplete="off"
							value={password}
							name="password"
							onChange={handleChange}
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							className="block text-sm py-3 px-4 rounded-lg w-full border-0 outline-none"
						/>
						<div className="cursor-pointer">
							<div
								onClick={() => setShowPassword(true)}
								className={!showPassword ? "block duration-300" : "hidden duration-300"}
							>
								<EyeOutline />
							</div>
							<div
								onClick={() => setShowPassword(false)}
								className={showPassword ? "block duration-300" : "hidden duration-300"}
							>
								<EyeOffOutline />
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mt-6">
					<button className="py-2 w-64 text-xl text-white bg-blue-400 rounded-lg hover:bg-blue-600 duration-300">
						Login
					</button>
				</div>
				<div className="flex justify-center">
					<div className="flex gap-8 items-center mt-4">
						<Link href="/register">
							<p className="text-sm md:flex grid gap-3 justify-center group cursor-pointer">
								Don&apos;t have An Account?{" "}
								<span className="group-hover:underline font-semibold group-hover:text-blue-500 duration-300">
									Register
								</span>
							</p>
						</Link>
						<Link href="/auth/forgot-password">
							<p className="text-sm text-zinc-400 hover:text-red-500 cursor-pointer">
								Forgot Password?
							</p>
						</Link>
					</div>
				</div>
			</div>
			<div className="w-40 h-40 absolute bg-blue-300 rounded-full top-0 right-12 hidden md:block"></div>
			<div className="w-20 h-40 absolute bg-blue-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
		</form>
	);
};

export default Login;
