import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MonitorDTO } from './dto/monitor.dto';
import { MonitorService } from './monitor.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('monitor')
@Controller('monitor')
export class MonitorController {

    constructor(private readonly monitorService: MonitorService) {}

    @Post()
    createMonitor(@Body() monitorDTO: MonitorDTO) {
        return this.monitorService.createMonitor(monitorDTO);
    }

    @Get()
    findAll() {
        return this.monitorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.monitorService.findOne(id);
    }

    @Put('id')
    update(@Param('id') id: string, @Body() monitorDTO: MonitorDTO) {
        return this.monitorService.update(id, monitorDTO);
    }

    @Delete('id')
    delete(@Param('id') id: string) {
        return this.monitorService.delete(id);
    }
}
