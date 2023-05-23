import { ReactNode } from "react";
import { StyleModal } from "./style";

interface IModalProps {
	prop: ReactNode;
}

const Modal = ({ prop }: IModalProps) => {
	return (
		<StyleModal>
			<div>{prop}</div>
		</StyleModal>
	);
};

export default Modal;