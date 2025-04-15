const EventType = {
  System: 'system',
  Message: 'message',
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class Notifier {
  events = [];
  handlers = [];

  constructor() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const port = window.location.port;
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    this.socket.onopen = () => {
      this.receiveEvent(new EventMessage('System', EventType.System, { msg: 'Connected to WebSocket' }));
    };

    this.socket.onclose = () => {
      this.receiveEvent(new EventMessage('System', EventType.System, { msg: 'Disconnected from WebSocket' }));
    };

    this.socket.onmessage = (msg) => {
      const event = JSON.parse(msg.data);
      this.receiveEvent(event);
    };
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    this.socket.send(JSON.stringify(event));
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);
    this.handlers.forEach((handler) => handler(event));
  }
}

const notifier = new Notifier();
export { EventType, notifier };