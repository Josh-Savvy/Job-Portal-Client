import Link from "next/link";
import React, { useEffect, useState } from "react";
import { EyeOffOutline, EyeOutline } from "react-ionicons";
import { categoryData } from "../components/ui/organisms/homepage/popular-categories/data";
import { ToastContainer, toast } from "react-toastify";
import { GetServerSidePropsContext } from "next";
import { GET_INDUSTRIES, REGISTRATION_MUTATION } from "../types/graphql.type";
import { useMutation, useQuery } from "@apollo/client";
import {
	CreateUserInput,
	IndustryType,
	RegAccountType,
} from "../interfaces/user.type";

const Register = ({ serverAcctType }: { serverAcctType: RegAccountType }) => {
	const {
		loading: industriesLoading,
		error: industriesError,
		data: industriesData,
		refetch: industriesRefetch,
	} = useQuery(GET_INDUSTRIES, { fetchPolicy: "network-only" });
	const [createUser, { data, loading, error }] = useMutation(
		REGISTRATION_MUTATION,
	);
	useEffect(() => {
		industriesRefetch();
	}, []);

	const [category, setCategory] = useState<string>("");
	const accType = [RegAccountType.FREELANCER, RegAccountType.EMPLOYER];
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const formDetails: CreateUserInput = {
		email: "",
		name: "",
		password: "",
		categoryId: category,
		// username: "",
		accountType: RegAccountType[serverAcctType] || accType[0],
	};
	const [formState, setFormState] = useState<CreateUserInput>(formDetails);
	const { email, name: fname, password, accountType } = formState;
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (!category) {
			toast.error("Please select at least one category.", {
				position: "top-center",
				theme: "light",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return new Error("Please select at least one category.");
		}
		if (!accountType) {
			toast.error("Please select an account type.", {
				position: "top-center",
				theme: "light",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return;
		}
		const variables = {
			createUserInput: {
				name: fname,
				email: email,
				password: password,
				accountType: accountType,
				categoryId: category,
			},
		};
		try {
			console.table(formState);
			const result = await createUser({
				variables,
			});
			console.log({ result: result });
			toast.success(
				"Registration successful! Kindly check your email to activate your account.",
				{
					position: "top-center",
					theme: "light",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				},
			);
			setFormState(formDetails);
			setTimeout(() => {
				location.replace(`/login?auth=${email}`);
			}, 3000);
		} catch (error: any) {
			console.log(error);
			toast.error(
				`${
					error?.message
						? error?.message
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
	};
	if (industriesError) {
		console.log({ industriesError: industriesError });
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="relative md:h-[130vh] bg-blue-50 w-full md:flex justify-center items-center"
		>
			<ToastContainer />
			<div className="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 transform rotate-45 hidden md:block"></div>
			<div className="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 right-10 transform md:block rotate-12 hidden"></div>
			<div className="py-12 px-12 bg-white md:rounded-2xl shadow-xl z-10 mt-28 md:mt-0">
				<div>
					<h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
						Create An Account
					</h1>
					<p className="w-full text-center text-sm font-semibold text-gray-700 tracking-wide cursor-pointer">
						Create an account as
					</p>
					<div className="w-full text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
						<div className="bg-zinc-200 p-3 md:flex grid gap-4 rounded mt-2">
							{accType.map((acc) => {
								return (
									<div
										key={acc}
										onClick={() => {
											setFormState({ ...formState, accountType: acc });
										}}
										className={`flex justify-center w-full transition-colors duration-500 ${
											acc === accountType ? "bg-zinc-800 text-white" : "bg-transparent"
										} rounded-lg p-2`}
									>
										<div>{acc}</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="space-y-4">
					{accountType === accType[0] ? (
						<div className="md:flex grid items-center gap-3">
							<input
								required
								type="text"
								value={fname}
								name="name"
								onChange={handleChange}
								placeholder="Full Name"
								className="invalid:border-red-500 block text-sm py-3 px-4 rounded-lg w-full border outline-none"
							/>
							<input
								required
								type="text"
								placeholder="Username"
								// value={username}
								name="username"
								// onChange={handleChange}
								className="invalid:border-red-500 block text-sm py-3 px-4 rounded-lg w-full border outline-none"
							/>
						</div>
					) : (
						<div className="md:flex grid items-center gap-3">
							<input
								required
								type="text"
								value={fname}
								name="name"
								onChange={handleChange}
								placeholder="Company"
								className="invalid:border-red-500 block text-sm py-3 px-4 rounded-lg w-full border outline-none"
							/>
							<input
								required
								type="text"
								// value={username}
								name="username"
								// onChange={handleChange}
								placeholder="Admin Username"
								className="invalid:border-red-500 block text-sm py-3 px-4 rounded-lg w-full border outline-none"
							/>
						</div>
					)}
					<input
						required
						type="email"
						name="email"
						value={email}
						onChange={handleChange}
						placeholder="Email Address"
						className="invalid:border-red-500 block text-sm py-3 px-4 rounded-lg w-full border outline-none"
					/>
					<select
						name="category"
						id=""
						className="invalid:border-red-500 block text-sm py-3 px-4 rounded-lg w-full border outline-none"
						onChange={(e) => {
							setFormState({ ...formState, categoryId: e.target.value });
							setCategory(e.target.value);
						}}
					>
						<option value={category ? category : ""} hidden={category !== ""}>
							Category
						</option>
						{industriesData?.getAllIndustries.map((cat: IndustryType, i: any) => {
							return (
								<option key={i} value={cat.id}>
									{cat.title}
								</option>
							);
						})}
					</select>
					<div className="relative border p-2 rounded-lg flex items-center">
						<input
							required
							value={password}
							name="password"
							onChange={handleChange}
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							className="invalid:border-red-500 peer block text-sm py-3 px-4 rounded-lg w-full border-0 outline-none"
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
						{!password && (
							<p className="mt-2 absolute bottom-0 left-[2em] text-red-500 text-xs">
								Please enter your password.
							</p>
						)}
					</div>
				</div>

				<div className="text-center mt-6">
					<button className="py-2 w-64 text-xl text-white bg-blue-400 rounded-lg hover:bg-blue-600">
						Create Account
					</button>
					<Link href="/login">
						<p className="mt-4 text-sm">
							Already Have An Account?{" "}
							<span className="underline  cursor-pointer"> Sign In</span>
						</p>
					</Link>
				</div>
			</div>
			<div className="w-40 h-40 absolute bg-blue-300 rounded-full top-0 right-12 hidden md:block"></div>
			<div className="w-20 h-40 absolute bg-blue-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
		</form>
	);
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const token = ctx.req.cookies.token;
	const { type }: any = ctx.query;
	if (token) {
		return {
			redirect: {
				destination: "/profile",
				permanent: false,
			},
		};
	} else {
		return {
			props: { serverAcctType: type?.toUpperCase() },
		};
	}
};

export default Register;
