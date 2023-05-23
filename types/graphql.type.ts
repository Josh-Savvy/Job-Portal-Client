import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			accessToken
		}
	}
`;
export const REGISTRATION_MUTATION = gql`
	mutation createUser($createUserInput: CreateUserInput!) {
		createUser(createUserInput: $createUserInput) {
			id
			name
			email
			accountType
		}
	}
`;

export enum RegAccountType {
	EMPLOYER = "EMPLOYER",
	FREELANCER = "FREELANCER",
}
export interface CreateUserInput {
	name: string;
	email: string;
	password: string;
	accountType: RegAccountType;
	categoryId: string;
}
export enum JobNatureEnum {
	REMOTE = "Remote",
	HYBRID = "Hybrid",
	ONSITE = "On-Site",
}

export interface JobCreateInput {
	title: string;
	description: string;
	position: string;
	location: string;
	company: string;
	nature: JobNatureEnum;
	salary: string;
	responsibilities: [string];
	categoryId: string;
}

export const GET_EMPLOYERS = gql`
	query getEmployers {
		getEmployers {
			name
			category {
				id
				title
			}
		}
	}
`;
export const GET_FREELANCERS = gql`
	query getFreelancers {
		getFreelancers {
			name
			email
			category {
				id
				title
			}
		}
	}
`;
export const GET_USER = gql`
	query getUser {
		getUser {
			id
			name
			email
			accountType
			category {
				id
				title
			}
			notifications {
				id
				title
				createdAt
			}
			savedJobs {
				id
				title
				position
				description
				slug
				nature
				location
				company
				createdAt
				responsibilities
				active
				salary
				createdBy
			}
			appliedJobs {
				id
				title
				position
				description
				slug
				nature
				location
				company
				createdAt
				responsibilities
				active
				salary
				createdBy
			}
		}
	}
`;
export const GET_ALL_JOBS_FOR_ADMIN = gql`
	query getAllJobsForAdmin {
		getAllJobsForAdmin {
			id
			title
			position
			description
			slug
			category {
				id
				title
				slug
			}
			applicants {
				name
				email
				accountType
			}
			nature
			location
			company
			createdAt
			responsibilities
			active
			salary
			createdBy
		}
	}
`;

export const GET_ALL_JOBS = gql`
	query getAllJobs {
		getAllJobs {
			id
			title
			position
			description
			slug
			category {
				id
				title
				slug
			}
			nature
			location
			company
			createdAt
			responsibilities
			active
			salary
			createdBy
		}
	}
`;

export const GET_ALL_JOBS_BY_CATEGORY = gql`
	query getAllJobsByCategory($slug: String!) {
		getAllJobsByCategory(slug: $slug) {
			id
			title
			position
			description
			slug
			category {
				id
				title
				slug
			}
			nature
			location
			company
			createdAt
			responsibilities
			active
			salary
			createdBy
		}
	}
`;

export const GET_INDUSTRIES = gql`
	query getAllIndustries {
		getAllIndustries {
			id
			title
			slug
			icon
			jobs {
				id
				title
				position
				description
				slug
				nature
				location
				company
				createdAt
				responsibilities
				active
				salary
				createdBy
			}
		}
	}
`;

export const SAVE_JOB_TO_PROFILE = gql`
	mutation saveJob($jobId: String!) {
		saveJob(jobId: $jobId)
	}
`;

export const APPLY_FOR_JOB = gql`
	mutation applyForJob($jobId: String!) {
		applyForJob(jobId: $jobId)
	}
`;

export const GET_JOB_BY_ID = gql`
	query getJobById($jobId: String!) {
		getJobById(jobId: $jobId) {
			id
			title
			position
			description
			slug
			category {
				id
				title
				slug
			}
			nature
			location
			company
			createdAt
			responsibilities
			active
			salary
			createdBy
		}
	}
`;
export const CREATE_JOB = gql`
	mutation createJob($jobCreateInput: JobCreateInput!) {
		createJob(jobCreateInput: $jobCreateInput)
	}
`;
