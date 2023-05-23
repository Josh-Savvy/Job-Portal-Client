import { GetServerSidePropsContext } from "next";

const ProfilePage = () => {
	return <div>Redirecting...</div>;
};

export const getServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	const token = context.req.cookies.token;
	if (!token) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
	return {
		redirect: {
			destination: "/profile/dashboard",
			permanent: false,
		},
	};
};

export default ProfilePage;
