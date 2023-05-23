import axios from "axios";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

const withEmployer = (WrappedComponent: any) => {
	const Wrapper = (props: any) => {
		return <WrappedComponent {...props} />;
	};

	return Wrapper;
};

export default withEmployer;

export const getServerSideProps = async (
	context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<any>> => {
	const token = context.req.cookies.token;

	if (!token) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}

	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/user`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data: userRole } = response;

		if (userRole && userRole !== "Employer" && userRole !== "Admin") {
			return {
				redirect: {
					destination: "/profile",
					permanent: false,
				},
			};
		}

		return {
			props: {},
		};
	} catch (error) {
		console.log(error);
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
};
