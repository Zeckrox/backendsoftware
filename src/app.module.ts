import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, UserSchema } from './schemas/user.schema';
const dotenv = require("dotenv")
dotenv.config()

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI as string,
           {dbName:process.env.MONGODB_DB}),
        	  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
           ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
