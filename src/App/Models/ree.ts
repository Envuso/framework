import {Exclude, Expose, Type} from "class-transformer";
import {IsEmail, IsNotEmpty} from "class-validator";
import {ModelEntity} from "@Providers/Model/ModelEntity";
import {ObjectId} from "mongodb";
import {Id} from "@Core/Decorators/ModelDecorators";
import {injectable} from "inversify";

@injectable()
export class ree extends ModelEntity<ree> {

	@Id
	id: ObjectId;

}