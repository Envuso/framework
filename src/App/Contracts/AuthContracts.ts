export type PrimaryAuthCredential = keyof AuthCredentialContract;

export interface AuthCredentialContract {
	email: string;
	password: string;
}
