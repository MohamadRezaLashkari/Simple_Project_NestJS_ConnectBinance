import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.NODE_ENV !== "production") {
    app.getHttpAdapter().getInstance().set("json spaces", 3);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
  }
}
bootstrap();
