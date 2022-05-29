import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export function NavItem({ linkPage, title }) {
	const urlLinkPage = `/${linkPage}`;
	const router = useRouter();
	const [isRouteActive, setIsRouteActive] = useState(false);

	useEffect(() => {
		urlLinkPage === router.asPath
			? setIsRouteActive(true)
			: setIsRouteActive(false);
	}, [router.asPath, urlLinkPage]);

	return (
		<li className="nav-item d-none d-md-block">
			<Link href={urlLinkPage}>
				<a
					className={`nav-link customLink py-2 px-2 ${
						isRouteActive ? "text-info" : "text-dark"
					}`}
				>
					{title}
				</a>
			</Link>
		</li>
	);
}
