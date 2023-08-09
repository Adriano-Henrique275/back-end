import { Module } from '@nestjs/common';
import { User, UserSchema,  } from './user/user';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
          {
            name: User.name,
            schema: UserSchema
          }
        ])
      ],
      exports: [],
      controllers: [UsersController],
      providers: [UsersService]
})
export class UsersModule {   }
