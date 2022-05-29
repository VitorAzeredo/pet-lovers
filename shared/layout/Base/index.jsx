import Head from "next/head";
import Navbar from "../../components/Navbar";

export default function Base({ pageTitle, children }) {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<main>
				<div className="container-fluid pt-4 ps-5 pe-5 pb-4">
					<Navbar />
					{children}
				</div>
			</main>
		</>
	);
}
