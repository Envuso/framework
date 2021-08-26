import {injectable} from "@envuso/core/AppContainer";
import {Middleware} from "@envuso/core/Routing";
import {SocketChannelListener} from "@envuso/core/Sockets/SocketChannelListener";
import {SocketConnection} from "@envuso/core/Sockets/SocketConnection";
import {SocketPacket} from "@envuso/core/Sockets/SocketPacket";
import {User} from "../../Models/User";

@injectable()
export class HelloWorldSocketListener extends SocketChannelListener {

	public channelName(): string {
		return "hello-world";
	}

	public async isAuthorised(connection: SocketConnection, user: any): Promise<boolean> {
		return true;
	}

	public middlewares(): Middleware[] {
		return [];
	}

	async message(connection: SocketConnection, user: User, packet: SocketPacket): Promise<any> {
		const data = packet.getData();

		this.broadcast('hello', 'world', {
			message : 'Hey there.'
		});
	}
}
