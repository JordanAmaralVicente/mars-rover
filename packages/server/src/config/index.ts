interface ServerConfig {
    application: {
        port: number;
    }
    database: {
        typeorm: {
            username: string;
            password: string;
            port: number;
            database: string;
            host: string;
        }
    },
}

export const serverConfig: ServerConfig = {
    application: {
        port: 8080,
    },
    database: {
        typeorm: {
            username: "root",
            password: "admin",
            port: 3306,
            database: "mars_rover_db",
            host: "localhost",
        },
    },
};
