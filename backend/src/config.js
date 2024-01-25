import {config} from 'dotenv'
config()

export const PORT = process.env.PORT ?? 2934;
export const ENCRIPT_KEY = process.env.ENCRIPT_KEY;
export const JWT_KEY = process.env.JWT_KEY;