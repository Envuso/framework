import {Exclude, Expose} from "class-transformer";
import {id} from "@envuso/core/Database";
import {Authenticatable} from "@envuso/core";
import {IsEmail, IsNotEmpty} from "class-validator";
import {ObjectId} from "mongodb";

export class User extends Authenticatable<User> {

	@id
	_id: ObjectId;

	@IsEmail()
	@IsNotEmpty()
	email: string;

	@Expose()
	name: string;

	@Exclude({toPlainOnly : true})
	password?: string;

	createdAt: Date;
}



