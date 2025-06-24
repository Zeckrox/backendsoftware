import { Module } from '@nestjs/common';
import { DisabledHoursService } from './disabledHours.service';
import { DisabledHoursController } from './disabledHours.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DisabledHours, DisabledHoursSchema } from './schema/disabledHours.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DisabledHours.name,
        schema: DisabledHoursSchema,
      },
    ]),
  ],
  controllers: [DisabledHoursController],
  providers: [DisabledHoursService],
})
export class DisabledHoursModule {}
