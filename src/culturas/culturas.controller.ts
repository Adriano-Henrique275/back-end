import { Body, Post } from "@nestjs/common";
import { CulturasService } from "./culturas.service";
import { CulturasDTO } from "./dto/culturas.dto";


export class CulturasController {
    constructor(private readonly culturasService: CulturasService) {}

    @Post()
    create(@Body() culturasDTO: CulturasDTO) {
        return this.culturasService.create(culturasDTO);
    }
}