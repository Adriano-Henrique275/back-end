import { HttpStatus, Injectable } from '@nestjs/common';
import { MonitorDTO } from './dto/monitor.dto';
import { IMonitor } from 'src/common/interfaces/monitor.interface';
import { InjectModel } from '@nestjs/mongoose';
import { MONITOR } from 'src/common/models/models';
import { Model } from 'mongoose';

@Injectable()
export class MonitorService {

    constructor(@InjectModel(MONITOR.name) private readonly model: Model<IMonitor>) {}

    async createMonitor(monitorDTO: MonitorDTO): Promise<IMonitor> {
        const newMonitor = new this.model(monitorDTO);

        return await newMonitor.save();
    }

    async findAll(): Promise<IMonitor[]> {
        return await this.model.find();
    }

    async findOne(id: string): Promise<IMonitor> {
        return await this.model.findById(id);
    }

    async update(id: string, monitorDTO: MonitorDTO): Promise<IMonitor> {
        return await this.model.findByIdAndUpdate(id, monitorDTO);
    }

    async delete(id: string) {
        await this.model.findByIdAndDelete(id);
        return {status: HttpStatus.OK, msg: 'Monitor deleted with success!'};
    }
}
