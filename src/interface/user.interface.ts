export interface User {
	name: string;
	profile: string;
	posts: {
		subject: string;
		content: string;
	}[];
}
