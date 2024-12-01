import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Uni-Space Server</title>
    </head>
    <body>
      <h1>Uni-Space Server | Port ${process.env.SERVER_PORT}</h1>
      <hr />
      <p>Front-end Client: <a href="${process.env.FRONTEND_URL}" target="_blank">${process.env.FRONTEND_URL}</a></p>
      <p>Swagger docs: <a href="${process.env.SWAGGER_URL}" target="_blank">${process.env.SWAGGER_URL}</a></p>
    </body>
    </html>`;
  }
}
