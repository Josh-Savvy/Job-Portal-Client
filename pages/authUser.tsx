import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { logout } from "../utils/auth";
import { GET_USER } from "../types/graphql.type";
import { useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";

const withAuthUser = <P extends object>(
	WrappedComponent: React.ComponentType<P>,
): React.FC<P> => {
	const Wrapper = (props: P) => {
		const router = useRouter();
		const { loading, error, data, refetch } = useQuery(GET_USER, {
			fetchPolicy: "network-only",
		});

		useEffect(() => {
			refetch();
		}, [data]);

		if (error) {
			console.log(error);
			if (error.message === "Unauthorized") {
				logout();
				router.replace("/login");
				return null;
			} else {
				return <p>Error: {error.message}</p>;
			}
		}

		if (!loading) {
			return (
				<>
					<WrappedComponent {...props} user={data?.getUser} refecth={refetch} />
				</>
			);
		} else {
			return <>Loading...</>;
		}
	};

	return Wrapper;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const token = ctx.req.cookies.token;
	if (!token) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
};

export default withAuthUser;
