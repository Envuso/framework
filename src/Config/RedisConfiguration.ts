import {ConfigurationCredentials} from "@envuso/core/AppContainer/Config/ConfigurationCredentials";
import {RedisOptions} from "ioredis";

export default class RedisConfiguration extends ConfigurationCredentials implements RedisOptions {
	host = "127.0.0.1";
	port = 6379;
	password = null;
	db = 0;
	keyPrefix = "envuso-";
}
