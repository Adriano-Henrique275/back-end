import { CULTURAS } from "src/common/models/models";
import { CulturaSchema } from "./schema/cultura.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { CulturasController } from "./culturas.controller";
import { CulturasService } from "./culturas.service";

@Module({
    imports: [
      MongooseModule.forFeatureAsync([
        {
          name: CULTURAS.name,
          useFactory: () => {
            return CulturaSchema;
          },
        },
      ]),
    ],
    controllers: [CulturasController],
    providers: [CulturasService],
  })
  export class UserModule {}