import { Module } from '@nestjs/common';
import { MonitorController } from './monitor.controller';
import { MonitorService } from './monitor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MONITOR } from 'src/common/models/models';
import { MonitorSchema } from './schema/monitor.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: MONITOR.name,
        useFactory: () => MonitorSchema,
      },
    ]),
  ],
  controllers: [MonitorController],
  providers: [MonitorService]
})
export class MonitorModule {}
