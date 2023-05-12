import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			accessToken
		}
	}
`;

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

export const GET_ALL_JOBS = gql`
	query getAllJobs {
		getAllJobs {
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
`;

export const GET_ALL_JOBS_BY_CATEGORY = gql`
	query getAllJobsByCategory($slug: String!) {
		getAllJobsByCategory(slug: $slug) {
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
	mutation saveJob($jobId: String!, $userId: String!) {
		saveJob(jobId: $jobId, userId: $userId)
	}
`;
