import {Exception} from "@envuso/core/Common/Exception/Exception";
import { StatusCodes } from "@envuso/core/Common";

export class UnauthorisedException extends Exception {

	constructor(message?: string) {
		super(message ?? 'Unauthorised.', StatusCodes.UNAUTHORIZED);
	}

}
