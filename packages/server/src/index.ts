import * as http from "http";
import app from "./app";
import { DataBaseSource } from "./databases/typeorm/config";
import { serverConfig } from "./config";
import { PlateauController } from "./databases/typeorm/repositories";


async function run() {
    DataBaseSource.initialize().then(async () => {
        const server = http.createServer(app);

        server.listen(serverConfig.application.port, async () => {
            console.log(
                `server listening on port: ${serverConfig.application.port}`
            );

            console.log(
                await PlateauController.findAll(),
            )
        });
    });
}

run();
