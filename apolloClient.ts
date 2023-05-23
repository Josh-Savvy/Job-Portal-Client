import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getCookie } from "./utils/auth";

const httpLink = createHttpLink({
	uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
});
const authLink = setContext((_, { headers }) => {
	const token = getCookie("token");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});
const client = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default client;
