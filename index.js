'use strict'

const config = require('./config/index')
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const gplMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = config.port || 3030

const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')

const schema = makeExecutableSchema({typeDefs, resolvers})

app.use('/api', gplMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
