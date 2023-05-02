import { AppProps } from "next/app";
import "../public/styles/globals.css";
import Layout from "../components/ui/layout";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/styles/nprogress.css";
import "nprogress/nprogress.css";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import NProgress from "nprogress";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	useEffect(() => {
		const handleStart = (url: string) => {
			setLoading(true);
			NProgress.start();
		};
		const handleStop = () => {
			setLoading(false);
			NProgress.done();
		};
		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleStop);
			router.events.off("routeChangeError", handleStop);
		};
	}, [router]);

	useEffect(() => {
		setLoading(true);
	}, []);

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
