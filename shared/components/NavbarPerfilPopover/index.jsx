import { Nav } from "react-bootstrap";

export function NavbarPerfilPopover({ signOutAndRoute }) {
	return (
		<Nav defaultActiveKey="/" className="flex-column">
			<Nav.Link eventKey="meus-pets" href="/meus-pets">
				Meus Pets
			</Nav.Link>
			<Nav.Link eventKey="meus-pets" href="/meus-pets">
				Meus Apadrinhamentos
			</Nav.Link>
			<Nav.Link onClick={signOutAndRoute} eventKey="sair">
				Sair
			</Nav.Link>
		</Nav>
	);
}
