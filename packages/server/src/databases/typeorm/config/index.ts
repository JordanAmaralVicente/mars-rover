import { DataSource } from "typeorm";
import { serverConfig } from "../../../config";

export const DataBaseSource = new DataSource({
    ...serverConfig.database.typeorm,
    synchronize: false,
    logging: true,
    type: "mysql",
    migrationsTableName: "migrations",
});
