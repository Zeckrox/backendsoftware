import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TablesModule } from './tables/tables.module';
import { CubiclesModule } from './cubicles/cubicles.module';
import { ReservationsModule } from './reservations/reservations.module';
import { AuthModule } from './auth/auth.module';
import { DisabledDayModule } from './disabledDays/disabledDays.module';
import { DisabledHoursModule } from './disabledHours/disabledHours.module';
import { DisabledDurationModule } from './disabledDurations/disabledDurations.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //[para acceder a archivo env de forma global]
    }),

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
        dbName: process.env.MONGODB_DB,
      }),
    }),

    UsersModule,

    TablesModule,

    CubiclesModule,

    ReservationsModule,

    AuthModule,

    DisabledDayModule,
    
    DisabledHoursModule,

    DisabledDurationModule
  ],
})
export class AppModule {}
