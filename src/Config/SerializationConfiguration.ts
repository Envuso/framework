import {ClassTransformOptions} from "class-transformer/types/interfaces/class-transformer-options.interface";
import {ValidatorOptions} from "class-validator/types/validation/ValidatorOptions";
import {ConfigurationCredentials} from "@envuso/core/AppContainer/Config/ConfigurationCredentials";
import {DataTransferObjectSerialization} from "@envuso/core/Routing";


export class SerializationConfiguration extends ConfigurationCredentials {

	/**
	 * When a data transfer object is used with the @dto()
	 * decorator on a controller method.
	 */
	dataTransferObjects: DataTransferObjectSerialization = {
		/**
		 * These are the options used to map the request body to your data transfer object.
		 *
		 * This is run when we process the request and call the controller method with your DTO.
		 */
		requestSerializationOptions : <ClassTransformOptions>{
			strategy        : 'exposeAll',
			excludePrefixes : ['__']
		},
		/**
		 * These are the options used for validation after creating your DTO.
		 */
		validationOptions : <ValidatorOptions>{
			whitelist           : true,
			forbidUnknownValues : true,
			enableDebugMessages : true,
		}
	};

}
