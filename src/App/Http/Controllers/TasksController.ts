import {Controller} from "@Providers/Http/Controller/Controller";
import {get, post, put, patch, destroy, controller, middleware, param, dto} from "@Decorators";
import {DataTransferObject} from "@Providers/Http/Controller/DataTransferObject";

class StoreBody extends DataTransferObject {

}

class UpdateBody extends DataTransferObject {

}

//@middleware()
@controller('/')
export class TasksController extends Controller {

	@get('/')
	public async list() {

	}

	@get('/:id')
	public async get(@param id: string) {

	}

	@put('/')
	public async store(@dto() body: StoreBody) {

	}

	@patch('/:id')
	public async update(@param id: string, @dto() body: UpdateBody) {

	}

	@destroy('/:id')
	public async delete(@param id: string) {

	}

}
