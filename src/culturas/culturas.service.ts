import { CulturasDTO } from "./dto/culturas.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ICulturas } from "src/common/interfaces/culturas.interface";
import { CULTURAS } from "src/common/models/models";


export class CulturasService {

    constructor(@InjectModel(CULTURAS.name) private readonly model: Model<ICulturas> ) {}

    async create(culturasDTO: CulturasDTO) {
        const newCultura = new this.model({...CulturasDTO});
        return await newCultura.save()
    }
}