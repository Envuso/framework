
import { DataTransferObject } from "@envuso/core/Routing";
import {Confirmed} from "@envuso/core/Routing/DataTransferObject/Validators";
import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";

export class RegistrationRequestDto extends DataTransferObject {
	@IsEmail()
	@IsString()
	email: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(3)
	name: string;

	@MinLength(6)
	@Confirmed()
	password: string;
	@MinLength(6)
	password_confirmation: string;
}
