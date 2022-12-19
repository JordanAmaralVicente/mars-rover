import "dotenv/config";

function parseEnvStr(env: string, defaultEnv?: string): string {
    return process.env[env] || defaultEnv;
}

function parseEnvInt(env: string, defaultEnv?: number): number {
    if (env in process.env) {
        return parseInt(process.env[env], 10);
    }
    return defaultEnv;
}

interface ServerConfig {
    application: {
        port: number;
    };
    database: {
        typeorm: {
            username: string;
            password: string;
            port: number;
            database: string;
            host: string;
            entities: string[];
            migrations: string[];
        };
    };
}

export const serverConfig: ServerConfig = {
    application: {
        port: 8080,
    },
    database: {
        typeorm: {
            username: parseEnvStr("TYPEORM_USERNAME", "root"),
            password: parseEnvStr("TYPEORM_PASSWORD", "admin"),
            port: parseEnvInt("TYPEORM_PORT", 3306),
            database: parseEnvStr("TYPEORM_DATABASE", "mars_rover"),
            host: parseEnvStr("TYPEORM_HOST", "localhost"),
            entities: [
                parseEnvStr(
                    "TYPEORM_ENTITIES",
                    "../databases/typeorm/entities/**/*.ts",
                ),
            ],
            migrations: [
                parseEnvStr(
                    "TYPEORM_MIGRATIONS",
                    "../databases/typeorm/migrations/**/*.ts",
                ),
            ],
        },
    },
};
