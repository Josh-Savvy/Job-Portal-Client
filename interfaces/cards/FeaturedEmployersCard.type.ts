interface FeaturedEmployersCardType {
	company: string;
	location: string;
	imgSrc?: string;
	minNumberOfEmployees?: number;
	maxNumberOfEmployees?: number;
	openPositions: string[];
	link: string;
	topEmployer?: boolean;
}

export default FeaturedEmployersCardType;
