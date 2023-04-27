export interface IHomeFilter {
	brands: string[];
	models: string[];
	colors: string[];
	years: number[];
	fuels: string[];
	handleSetQuery: (type: string, value: string) => void;
}