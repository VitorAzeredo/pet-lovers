import { Overlay, Popover } from "react-bootstrap";
import { Thumbnail } from "../Thumbnail";
import { useState, useRef } from "react";

export function CustomOverlay({
	urlImgUser,
	popId,
	popAs,
	popHeaderTitle,
	children,
	popPlacement,
}) {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};

	return (
		<div ref={ref}>
			<span style={{ cursor: "pointer" }} onClick={handleClick}>
				<Thumbnail urlThumbnail={urlImgUser} />
			</span>

			<Overlay
				rootClose
				rootCloseEvent="click"
				show={show}
				target={target}
				placement={popPlacement}
				container={ref}
				containerPadding={20}
			>
				<Popover id={popId}>
					<Popover.Header as={popAs}>{popHeaderTitle}</Popover.Header>
					<Popover.Body>{children}</Popover.Body>
				</Popover>
			</Overlay>
		</div>
	);
}
