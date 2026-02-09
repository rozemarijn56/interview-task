import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

    const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve /public as static assets
  app.useStaticAssets(join(process.cwd(), 'public'), { prefix: '/public' });
  
  void bootstrap().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}


