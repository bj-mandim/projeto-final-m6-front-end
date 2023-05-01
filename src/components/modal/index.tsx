import { ReactNode } from "react";
import { StyleModal } from "./style";
import { flatten } from "@chakra-ui/react";

interface IModalProps {
	prop: ReactNode;
}

const Modal = ({ prop }: IModalProps) => {
	return (
		<StyleModal show={false}>
			<div>{prop}</div>
		</StyleModal>
	);
};

export default Modal;