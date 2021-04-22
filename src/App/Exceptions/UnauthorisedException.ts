import {Exception} from "@envuso/core/Common";
import {StatusCodes} from "http-status-codes";

export class UnauthorisedException extends Exception {

	constructor(message?: string) {
		super(message ?? 'Unauthorised.', StatusCodes.UNAUTHORIZED);
	}

}
