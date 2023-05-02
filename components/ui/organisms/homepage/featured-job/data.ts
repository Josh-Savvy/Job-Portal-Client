enum JobType {
	REMOTE = "remote",
	ON_SITE = "on site",
}
enum Salary {
	COMPETITIVE = "competitive",
	PROJECT_BASIS_BASED = "project basis based",
}

enum JobNature {
	CONTRACTUAL = "contractual",
	INTERNSHIP = "internship",
	FULL_TIME = "full time",
}

export const jobData = [
	{
		position: "Principal Engineer",
		slug: "principal-engineer",
		company: "Jincheng",
		category: "engineering",
		location: "Nigeria",
		type: JobType.ON_SITE,
		status: true,
		imgSrc: "/images/company_image_1.png",
		date: "04-09-2023",
		featured: false,
		description: `Jincheng is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!
        Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
        The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform
        Want to work with us? You're in good company!`,
		salary: "$40k Gross monthly" || Salary.COMPETITIVE,
		experience: "5 years",
		tags: ["software", "engineer", "technology", "remote"],
		benefits: [
			"Vision insurance",
			"Unlimited vacation",
			"Paid time off",
			"4 day workweek",
			"Coworking budget",
			"Pay in crypto",
		],
		responsibilities: [
			"Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento, WooCommerce, Visualsoft to enable seamless migrations.",
			"Working knowledge of payment gateways",
			"API platform experience / Building restful APIs",
		],
	},
	{
		position: "Principal Engineer",
		slug: "principal-engineer",
		company: "Jincheng",
		category: "engineering",
		location: "Nigeria",
		type: JobType.REMOTE,
		status: false,
		imgSrc: "/images/company_image_1.png",
		date: "04-09-2023",
		featured: false,
		description: `Jincheng is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!
        Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
        The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform
        Want to work with us? You're in good company!`,
		salary: "$40k Gross monthly" || Salary.COMPETITIVE,
		experience: "5 years",
		tags: ["software", "engineer", "technology", "remote"],
		benefits: [
			"Vision insurance",
			"Unlimited vacation",
			"Paid time off",
			"4 day workweek",
			"Coworking budget",
			"Pay in crypto",
		],
		responsibilities: [
			"Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento, WooCommerce, Visualsoft to enable seamless migrations.",
			"Working knowledge of payment gateways",
			"API platform experience / Building restful APIs",
		],
	},
	{
		position: "Principal Engineer",
		slug: "principal-engineer",
		company: "Jincheng",
		category: "engineering",
		location: "Nigeria",
		type: JobType.ON_SITE,
		status: false,
		imgSrc: "/images/company_image_1.png",
		date: "04-09-2023",
		featured: true,
		description: `Jincheng is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!
        Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
        The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform
        Want to work with us? You're in good company!`,
		salary: "$40k Gross monthly" || Salary.COMPETITIVE,
		experience: "5 years",
		tags: ["software", "engineer", "technology", "remote"],
		benefits: [
			"Vision insurance",
			"Unlimited vacation",
			"Paid time off",
			"4 day workweek",
			"Coworking budget",
			"Pay in crypto",
		],
		responsibilities: [
			"Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento, WooCommerce, Visualsoft to enable seamless migrations.",
			"Working knowledge of payment gateways",
			"API platform experience / Building restful APIs",
		],
	},
	{
		position: "Principal Engineer",
		slug: "principal-engineer",
		company: "Jincheng",
		category: "engineering",
		location: "Nigeria",
		type: JobType.ON_SITE,
		status: false,
		imgSrc: "/images/company_image_1.png",
		date: "04-09-2023",
		featured: false,
		description: `Jincheng is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!
        Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
        The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform
        Want to work with us? You're in good company!`,
		salary: "$40k Gross monthly" || Salary.COMPETITIVE,
		experience: "5 years",
		tags: ["software", "engineer", "technology", "remote"],
		benefits: [
			"Vision insurance",
			"Unlimited vacation",
			"Paid time off",
			"4 day workweek",
			"Coworking budget",
			"Pay in crypto",
		],
		responsibilities: [
			"Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento, WooCommerce, Visualsoft to enable seamless migrations.",
			"Working knowledge of payment gateways",
			"API platform experience / Building restful APIs",
		],
	},
	{
		position: "Principal Engineer",
		slug: "principal-engineer",
		company: "Jincheng",
		category: "engineering",
		location: "Nigeria",
		type: JobType.REMOTE,
		status: true,
		imgSrc: "/images/company_image_1.png",
		date: "04-09-2023",
		featured: true,
		description: `Jincheng is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!
        Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
        The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform
        Want to work with us? You're in good company!`,
		salary: "$40k Gross monthly" || Salary.COMPETITIVE,
		experience: "5 years",
		tags: ["software", "engineer", "technology", "remote"],
		benefits: [
			"Vision insurance",
			"Unlimited vacation",
			"Paid time off",
			"4 day workweek",
			"Coworking budget",
			"Pay in crypto",
		],
		responsibilities: [
			"Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento, WooCommerce, Visualsoft to enable seamless migrations.",
			"Working knowledge of payment gateways",
			"API platform experience / Building restful APIs",
		],
	},
];
