import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConectorsModule } from './conectors/conectors.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CommandModule } from 'nestjs-command';
import { AuthModule } from './auth/auth.module';

ConfigModule.forRoot();
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_NAME}.8qil9.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
    ),
    CommandModule,
    UsersModule,
    ConectorsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
