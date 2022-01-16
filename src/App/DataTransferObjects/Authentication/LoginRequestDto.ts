
import { DataTransferObject } from "@envuso/core/Routing";
import {IsEmail, IsString, MinLength} from "class-validator";

export class LoginRequestDto extends DataTransferObject {

	@IsEmail()
	@IsString()
	email: string;

	@MinLength(6)
	password: string;

}
