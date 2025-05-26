import { PartialType } from '@nestjs/mapped-types';
import { CreateCubicleDto } from './create-cubicle.dto';

export class UpdateCubicleDto extends PartialType(CreateCubicleDto) {}
