function parseEnvStr(env: string, defaultEnv?: string): string {
  return process.env[env] || defaultEnv;
}

function parseEnvInt(env: string, defaultEnv?: number): number {
  if (env in process.env) {
    return parseInt(process.env[env], 10);
  }
  return defaultEnv;
}

interface AppConfig {
  api: {
    url: string;
  };
}

export const appConfig: AppConfig = {
  api: {
    url: `http://${parseEnvStr(
      "REACT_APP_API_HOST",
      "localhost"
    )}:${parseEnvInt("REACT_APP_API_PORT", 8080)}/api`,
  },
};
