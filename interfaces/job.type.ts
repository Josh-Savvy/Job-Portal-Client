import { JobNatureEnum } from "../types/graphql.type";

export interface CreateJobType {
	title: string;
	categoryId: string;
	tags: string[];
	company: string;
	position: string;
	salary: string;
	salaryType: string;
	education: string;
	experience: string;
	jobType: string;
	jobNature: JobNatureEnum;
	expiryDate: string;
	location: string;
	description: string;
	responsibilities: string[];
}
