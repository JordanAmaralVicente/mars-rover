import { DataSource } from "typeorm";

import { serverConfig } from "../../../config";

import { Plateau } from "../entities/";
import { CreatePlateauTable1670972876571 } from "../migrations/";


export const DataBaseSource = new DataSource({
    ...serverConfig.database.typeorm,
    synchronize: false,
    logging: true,
    entities: [Plateau],
    migrations: [CreatePlateauTable1670972876571],
    type: "mysql",
    migrationsTableName: "migrations",
});
