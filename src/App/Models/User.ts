import {Id} from "@Core/Decorators/ModelDecorators";
import {Exclude, Expose, Type} from "class-transformer";
import {IsEmail, IsNotEmpty} from "class-validator";
import {ModelEntity} from "@Providers/Model/ModelEntity";
import {injectable} from "inversify";
import {ObjectId} from "mongodb";

@injectable()
export class User extends ModelEntity<User> {

	@Id
	_id: ObjectId;

	@IsEmail()
	@IsNotEmpty()
	email: string;

	name: string;

	displayName: string;

	@Exclude({toPlainOnly : true})
	password: string;

	createdAt: Date;

	@Type(() => Number)
	something: number;
}



