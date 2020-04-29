'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const gplMiddleware = require('express-graphql')

const app = express()
const port = process.env.port || 3030

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

const resolvers = {
    hello: () => 'hola mundo'
}

app.use('/api', gplMiddleware({
    schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/api`);
})