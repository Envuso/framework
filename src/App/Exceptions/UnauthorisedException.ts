import {Exception} from "@envuso/core";
import {StatusCodes} from "http-status-codes";

export class UnauthorisedException extends Exception {

	constructor(message?: string) {
		super(message ?? 'Unauthorised.', StatusCodes.UNAUTHORIZED);
	}

}
