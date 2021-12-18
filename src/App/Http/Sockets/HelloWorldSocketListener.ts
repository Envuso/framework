import {injectable} from "@envuso/core/AppContainer";
import {WebSocketConnectionContract} from "@envuso/core/Contracts/WebSockets/WebSocketConnectionContract";
import {Middleware} from "@envuso/core/Routing";
import {UserMessageSocketPacket} from "@envuso/core/WebSockets/SocketEventTypes";
import {WebSocketChannelListener} from "@envuso/core/WebSockets/WebSocketChannelListener";
import {User} from "../../Models/User";

@injectable()
export class HelloWorldSocketListener extends WebSocketChannelListener {

	public channelName(): string {
		return "hello-world";
	}

	public async isAuthorised(connection: WebSocketConnectionContract<User>): Promise<boolean> {
		return true;
	}

	public middlewares(): Middleware[] {
		return [];
	}

	async message(connection: WebSocketConnectionContract<User>, packet: UserMessageSocketPacket): Promise<any> {
		this.broadcast('hello', {
			message : 'Hey there.'
		});
	}
}
