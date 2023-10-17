import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { LotesEnum } from "src/common/enums/lotes.enum";
import { StatusPlantioEnum } from "src/common/enums/status.enum";
import { TypesEnum } from "src/common/enums/type.enum";
import { MonitorDTO } from "src/monitor/dto/monitor.dto";

export class CulturasDTO {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEnum(TypesEnum)
  readonly tipo: TypesEnum;

  @IsNotEmpty()
  @IsEnum(LotesEnum)
  readonly lote: LotesEnum;

  @IsNotEmpty()
  readonly monitor: MonitorDTO;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  readonly datePlantio: Date;

  @IsNotEmpty()
  readonly status: StatusPlantioEnum;

}