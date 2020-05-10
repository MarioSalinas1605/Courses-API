'use strict'
const connectDb = require('./db')

module.exports = {
    createCourse: async(root, { input }) => {
        const defaults = {
            teacher: '',
            topic: ''
        }
        const newCourse = Object.assign(input, defaults)
        let db, course
        try {
            db = await connectDb()
            course = await db.collection('courses').insertOne(input)
            newCourse._id = course.insertedId
        } catch (error) {
            console.error(error);
        }
        return newCourse
    }
}