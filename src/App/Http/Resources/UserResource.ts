import {RequestContextContract} from "@envuso/core/Contracts/Routing/Context/RequestContextContract";
import {ApiResource} from "@envuso/core/Routing";
import {User} from "../../Models/User";

export class UserResource extends ApiResource<User> {

	public transform(request: RequestContextContract): any {
		return {
			_id       : this.data._id,
			email     : this.data.email,
			name      : this.data.name,
			createdAt : this.data.createdAt,
			avatar    : `https://eu.ui-avatars.com/api/?name=${encodeURIComponent(this.data.name)}`
		};
	}

}
