import 'dotenv/config'

export default {
    schema: './src/models/*.js', // Here is where we will store all models
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL,
    }
}