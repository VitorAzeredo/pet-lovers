export function NavIconMenu({ handle }) {
	return (
		<div
			onClick={handle}
			className="mb-0 d-block d-md-none"
			style={{ cursor: "pointer" }}
		>
			<i className="bi bi-list fs-1"></i>
		</div>
	);
}
