require('dotenv').config()

const config = {
    user:  process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    port: process.env.PORT,
    node_env: process.env.NODE_ENV 
}

module.exports = config