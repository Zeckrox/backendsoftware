import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/users.schema';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    MongooseModule.forFeature([
      {
        name: User.name, ///en app era para conectarse a bd, aqui es para conectarse directamente a coleccion users
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService],
  exports: [UsersService]
})
export class UsersModule {}
