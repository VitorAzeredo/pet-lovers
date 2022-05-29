import Image from "react-bootstrap/Image";

export function Thumbnail({ urlThumbnail }) {
	return (
		<Image
			src={urlThumbnail}
			roundedCircle
			width="40"
			height="40"
			alt="Imagem de perfil do usuário"
		/>
	);
}
