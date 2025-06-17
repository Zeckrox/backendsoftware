import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from './schema/reservation.schema';
import { TablesModule } from 'src/tables/tables.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Reservation.name,
        schema: ReservationSchema,
      },
    ]),
    TablesModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
