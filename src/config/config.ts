import { ConfigProps } from "./config.interface"



export const config = (): ConfigProps => ({
    apiConfig: {
        port: parseInt(process.env.HOST) || 8080
    }
})