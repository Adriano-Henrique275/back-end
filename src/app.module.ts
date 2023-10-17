import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config'
import { MonitorModule } from './monitor/monitor.module';
import { CulturasModule } from './culturas/culturas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),MongooseModule.forRoot(process.env.URI_MONGODB),
    // MongooseModule.forRoot('mongodb+srv://adrianohenrique275:1W7SqXCzdUD4IUr2@cluster0.uq5cfuw.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    MonitorModule,
    CulturasModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
