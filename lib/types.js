'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')

const types = {
    Course: {
        people: async ({ people }) => {
            let db, peopleData, ids
            try {
                db = await connectDb()
                ids = people ? people.map(id => ObjectID(id)) : []
                peopleData = ids.length > 0
                    ? await db.collection('students').find({ _id: { $in: ids } }).toArray()
                    : []
            } catch (error) {
                console.log(error);
            }
            return peopleData
        }
    }
}

module.exports = types