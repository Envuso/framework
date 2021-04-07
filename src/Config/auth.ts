import {SignOptions, VerifyOptions} from "jsonwebtoken";
import {PrimaryAuthCredential} from "@App/Contracts/AuthContracts";

export const auth = {

	primaryLoginCredential : 'email' as PrimaryAuthCredential,

	jwtSigningOptions : {
		expiresIn : "24h",
		algorithm : "HS256",
	} as SignOptions,

	jwtVerifyOptions : {
		ignoreExpiration : false,
		algorithms       : ["HS256"],
	} as VerifyOptions


}
