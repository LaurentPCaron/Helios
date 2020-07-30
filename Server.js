class Server {
  constructor(id, client) {
    this.id = id;
    this.client = client;
    this.channel = client.channels.cache.get(id);
  }

  printToChannel(message) {
    this.channel.send(message);
  }
}

module.exports = Server;
