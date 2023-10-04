import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    const {
      DB_NAME = '',
      DB_USERNAME = '',
      DB_PASSWORD,
      DB_HOST,
  } = process.env;

    const DB_URI = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`;

    const sequelize = new Sequelize(DB_URI, {
      dialect: 'postgres',
      models: [],
      dialectOptions: {
        ssl: true,
      },
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}