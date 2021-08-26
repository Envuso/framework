import {DatabaseSeeder} from "@envuso/core/Database";
import {ExampleSeeder} from "./ExampleSeeder";

export class Seeders extends DatabaseSeeder {

	public registerSeeders() {
		this.add(ExampleSeeder);
	}

}
