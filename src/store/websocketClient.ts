export class WebSocketClient {
  url: string;
  socket: WebSocket | null;

  constructor(url: string) {
    this.url = url;
    this.socket = null;
  }

  connect() {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.log('Соединение установлено');
    };

    this.socket.onmessage = (event) => {
      console.log('Получено сообщение: ', event.data);
      // Дополнительная обработка полученных данных
    };

    this.socket.onclose = (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      }
      else {
        console.error('Соединение прервано');
      }
      console.log('Код закрытия: ' + event.code + ' Причина закрытия: ' + event.reason);
    };

    this.socket.onerror = (error: any) => {
      console.error('Ошибка: ' + error.message);
    };
  }

  send(data: any) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data);
    }
    else {
      console.error('WebSocket соединение не установлено.');
    }
  }

  close() {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
    }
  }
}