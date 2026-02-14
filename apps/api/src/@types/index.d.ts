declare namespace NodeJS {
  // Phòng trường hợp k chạy dc trên Bun
  interface ProcessEnv {
    PORT: string;
    URL_BACKEND: string;
    URL_FRONTEND: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME_DATABASE: string;
    REDIS_URL: string;
    JWT_SECRET: string;
  }
}
