import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Table, TableSchema } from './schema/table.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Table.name,
        schema: TableSchema,
      },
    ]),
  ],
  exports: [TablesService],
  controllers: [TablesController],
  providers: [TablesService],
})
export class TablesModule {}
