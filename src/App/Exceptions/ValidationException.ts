//import {Exception} from "@envuso/core/Common";
//import {ValidationError} from "class-validator";
//import {StatusCodes} from "http-status-codes";
//
//export class ValidationException extends Exception {
//
//	private errors: any = {};
//
//	constructor(errors: Array<ValidationError> | { [key: string]: string }) {
//		super("Woops something went wrong.", StatusCodes.UNPROCESSABLE_ENTITY);
//
//		this.errors = errors;
//
//		this.response = {
//			message : this.message,
//			errors  : this.processErrors()
//		};
//	}
//
//	static message(message) {
//		const exception = new ValidationException([
//			message
//		]);
//
//		exception.message = message;
//
//		return exception;
//	}
//
//	/**
//	 * Format the different types of validation exception messages
//	 *
//	 * @private
//	 */
//	private processErrors() {
//		let errors = {};
//
//		if (Array.isArray(this.errors)) {
//			if (!this.errors.length) {
//				return errors;
//			}
//
//			const firstError = this.errors[0] || null;
//
//			if (!firstError) {
//				return errors;
//			}
//
//			if (firstError instanceof ValidationError) {
//				for (let error of this.errors) {
//					errors[error.property] = Object.values(error.constraints)[0] || null;
//				}
//
//				return errors;
//			}
//
//			return errors;
//		}
//
//		errors = {...this.errors, ...errors};
//
//		return errors;
//	}
//
//
//}
