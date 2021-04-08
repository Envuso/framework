import {SignOptions, VerifyOptions} from "jsonwebtoken";
import {PrimaryAuthCredential} from "@App/Contracts/AuthContracts";

export const auth = {

	/**
	 * This will allow users authentication to use email for primary login.
	 * For example, you could change this to "username" instead if
	 * you didn't want to use email registration and login.
	 */
	primaryLoginCredential : 'email' as PrimaryAuthCredential,

	/**
	 * Used to sign JWT
	 */
	jwtSigningOptions : {
		expiresIn : "24h",
		algorithm : "HS256",
	} as SignOptions,

	/**
	 * Used to verify JWT are valid
	 */
	jwtVerifyOptions : {
		ignoreExpiration : false,
		algorithms       : ["HS256"],
	} as VerifyOptions


}
