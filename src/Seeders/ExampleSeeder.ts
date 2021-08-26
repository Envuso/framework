import {Seeder} from "@envuso/core/Database";

export class ExampleSeeder extends Seeder {
	public async seed(): Promise<any> {
		console.log('Hello from example seeder.');
	}

}
