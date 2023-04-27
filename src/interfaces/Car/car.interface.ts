import { ReactNode } from "react";

//contexts/AdsContext:
export interface IProvidersCarsProps {
	children: ReactNode;
}

export interface ICarsCreate {
	brand: string;
	model: string;
	color: string;
	fuel: string;
	description: string;
	km: number;
	year: number;
	fipe_table?: number;
	price: number;
	images: {
		image_one?: string;
		image_two?: string;
		image_three?: string;
	};
}

export interface IBrandObject {
	chevrolet: Array<Object>;
	citroën: Array<Object>;
	fiat: Array<Object>;
	ford: Array<Object>;
	honda: Array<Object>;
	hyundai: Array<Object>;
	nissan: Array<Object>;
	peugeot: Array<Object>;
	renault: Array<Object>;
	toyota: Array<Object>;
	volkswagen: Array<Object>;
}

export interface ICarsContext {
	modalCars: boolean;
	setModalAds: React.Dispatch<React.SetStateAction<boolean>>;
	carsTableKenzie: IBrandObject;
	setCarsTableKenzie: React.Dispatch<React.SetStateAction<IBrandObject>>;
	brandSelect: string;
	setBrandSelect: React.Dispatch<React.SetStateAction<string>>;
	model: IModel[];
	modelSelect: string;
	setModelSelect: React.Dispatch<React.SetStateAction<string>>;
	createCars: (data: ICarsCreate) => Promise<void>;
}
export interface IModel {
	brand: string;
	fuel: number;
	id: string;
	name: string;
	price: number;
	year: number;
}

export interface ICardProps {
	car: {
		images: {
		      image: string;
		};
		model: string;
		description: string;
		user: {
			name: string;
			image_url: string;
			id: string;
		};
		km: number;
		year: number;
		price: number;
		is_active: boolean;
	};
}

export interface ICardListProps {
	cars: ICarsReturn[];
}

export interface ICarsReturn {
	id: string;
	brand: string;
	model: string;
	year: number;
	color: string;
	fuel: string;
	km: number;
	price: number;
	fipe_table?: string;
	description: string;
	is_active: boolean;
	images: {
		id: string;
		image: string;
		image_one?: string;
		image_two?: string;
		image_three?: string;
		image_four?: string;
		image_five?: string;
	};
	user: {
		name: string;
		image_url: string;
		id: string;
	};
}