import { Module } from '@nestjs/common';
import { CubiclesService } from './cubicles.service';
import { CubiclesController } from './cubicles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cubicle, CubicleSchema } from './schema/cubicle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cubicle.name,
        schema: CubicleSchema,
      },
    ]),
  ],
  controllers: [CubiclesController],
  providers: [CubiclesService],
})
export class CubiclesModule {}
