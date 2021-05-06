import { CorsOptions } from "cors"

const whitelist = [
    'http://localhost:3000',
    'http://localhost:3001'
]

export const corsOptions: CorsOptions = {
    origin: whitelist
}