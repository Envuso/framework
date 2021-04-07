import {StatusCodes} from "http-status-codes";

export class Exception extends Error {

	public response: any = {};

	private _code: StatusCodes;

	constructor(message: string, code: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR) {
		super(message);
		this._code = code;

		this.response = {
			message : this.message,
			//errors  : {}
		}
	}

	code() {
		return this._code;
	}

}
