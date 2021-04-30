import AppConfig from './App';
import Auth from "./Auth";
import Database from "./Database";
import Server from "./Server";
import Session from "./Session";
import Storage from "./Storage";
import Websockets from "./Websockets";

export const Config = {
	app        : AppConfig,
	auth       : Auth,
	database   : Database,
	storage    : Storage,
	server     : Server,
	session    : Session,
	websockets : Websockets
};

