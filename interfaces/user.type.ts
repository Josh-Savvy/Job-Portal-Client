export interface UserType {
	id: string;
	name?: string;
	email?: string;
	category?: IndustryType;
	notifications?: NotificationType[];
	savedJobs?: JobType[];
	appliedJobs?: JobType[];
	accountType?: AccountType;
	isActive?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface IndustryType {
	id: string;
	title: string;
	slug: string;
	icon: string;
	users?: UserType[];
	jobs?: JobType[];
	createdAt: Date;
	updatedAt: Date;
}

export interface NotificationType {
	id: string;
	title: string;
	user: UserType;
	isRead: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface JobType {
	id: string;
	title: string;
	position: string;
	description: string;
	slug: string;
	nature: string;
	location: string;
	company: string;
	applicants?: UserType[];
	createdBy: string;
	category: IndustryType;
	salary: string;
	active: boolean;
	expired: boolean;
	responsibilities: [string];
	createdAt: Date;
	updatedAt: Date;
}

export enum AccountType {
	FREELANCER = "Freelancer",
	EMPLOYER = "Employer",
	ADMIN = "Admin",
}
export enum RegAccountType {
	FREELANCER = "FREELANCER",
	EMPLOYER = "EMPLOYER",
}

export interface CreateUserInput {
	name: string;
	email: string;
	password: string;
	accountType: RegAccountType;
	categoryId: string;
}
