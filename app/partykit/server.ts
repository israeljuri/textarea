import type * as Party from 'partykit/server';

export default class Server implements Party.Server {
  constructor(readonly room: Party.Room) {}

  async onMessage(message: string, sender: Party.Connection) {
    this.room.broadcast(message);
  }

  // onConnect(conn: Party.Connection, ctx: Party.ConnectionContext) {
  // conn.send('Hello 👋, you can start entering your text here!');
  // }
}

Server satisfies Party.Worker;
