import { Module } from '@nestjs/common';
import { DisabledDurationService } from './disabledDurations.service';
import { DisabledDurationController } from './disabledDurations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DisabledDuration, DisabledDurationSchema } from './schema/disabledDurations.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DisabledDuration.name,
        schema: DisabledDurationSchema,
      },
    ]),
  ],
  controllers: [DisabledDurationController],
  providers: [DisabledDurationService],
})
export class DisabledDurationModule {}
