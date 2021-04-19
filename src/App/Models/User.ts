import {id, Model} from "@envuso/core";
import {IsEmail, IsNotEmpty} from "class-validator";
import {ObjectId} from "mongodb";

export class User extends Model<User> {

	@id
	_id: ObjectId;

	@IsEmail()
	@IsNotEmpty()
	email: string;

	name: string;

//	@Exclude({toPlainOnly : true})
	password: string;

	createdAt: Date;
}



