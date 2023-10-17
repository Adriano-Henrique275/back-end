import { Body, Controller, Get, Post } from "@nestjs/common";
import { CulturasService } from "./culturas.service";
import { CulturasDTO } from "./dto/culturas.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('culturas')
@Controller('culturas')
export class CulturasController {
  constructor(
    private readonly culturasService: CulturasService
  ) { }

  @Post()
  createCultura(@Body() culturasDTO: CulturasDTO) {
    return this.culturasService.createCultura(culturasDTO);
  }

  @Get()
  findAll() {
    return this.culturasService.findAll();
  }
}