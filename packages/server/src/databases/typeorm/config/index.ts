import { DataSource } from "typeorm";
import { serverConfig } from "../../../config";

import { Plateau, RoverPosition, Rover, RoverMovement } from "../entities";

import {
    CreatePlateauTable1670972876571,
    CreatePositionTable1671025703359,
    CreateRoverTable1671025742437,
    CreateMovementTable1671025751885,
} from "../migrations";

export const DataBaseSource = new DataSource({
    ...serverConfig.database.typeorm,
    synchronize: false,
    logging: true,
    entities: [Plateau, RoverPosition, Rover, RoverMovement],
    migrations: [
        CreatePlateauTable1670972876571,
        CreatePositionTable1671025703359,
        CreateRoverTable1671025742437,
        CreateMovementTable1671025751885,
    ],
    type: "mysql",
    migrationsTableName: "migrations",
});
