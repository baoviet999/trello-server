import dotenv from 'dotenv'
dotenv.config()

export const env = {
    CONNECT_STRING: process.env.CONNECTDB,
};