import { Room, Client } from 'colyseus'
import { MyRoomState } from './schema/MyRoomState'

export class MyRoom extends Room {
  onCreate(options: any) {
    this.setState(new MyRoomState())
    this.onMessage('type', (client, message) => {
      // Handle message here
    })
  }
  onJoin(client: Client, options: any) {}
  onLeave(client: Client, connected: boolean) {}
  onDispose() {}
}
