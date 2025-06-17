import { Module } from '@nestjs/common';
import { DisabledDayService } from './disabledDays.service';
import { DisabledDayController } from './disabledDays.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DisabledDay, DisabledDaySchema } from './schema/disabledDay.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DisabledDay.name,
        schema: DisabledDaySchema,
      },
    ]),
  ],
  controllers: [DisabledDayController],
  providers: [DisabledDayService],
})
export class DisabledDayModule {}
