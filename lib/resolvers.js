'use strict'
const connectDb = require('./db')


module.exports = {
  Query: {
    getCourses: async () => {
        let db, courses = []
        try {
            db = await connectDb()
            courses = await db.collection('courses').find().toArray()
        } catch (error) {
            console.log(error);
        } 
        return courses
    },
    getCourse: (root, args) => {
        const course = courses.filter(course => course._id === args.id)
        return course.pop()
    }
  }
}
