import { SetupApplication } from './app';

class Server {
  static start(port: number): void {
    const application = new SetupApplication(port);
    application.init();
    application.start();
  }
}

const port = parseInt(process.env.APP_PORT as string) || 3000;

Server.start(port);
