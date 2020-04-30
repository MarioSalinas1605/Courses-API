'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'my title',
    teacher: 'mi teacher',
    description: 'My description',
    topic: 'programming'
  },
  {
    _id: 'anyid2',
    title: 'my title 2',
    teacher: 'mi teacher',
    description: 'My description',
    topic: 'programming'
  },
  {
    _id: 'anyid3',
    title: 'my title 3',
    teacher: 'mi teacher',
    description: 'My description',
    topic: 'programming'
  }
]

module.exports = {
  Query: {
    getCourses: () => courses,
    getCourse: (root, args) => {
        const course = courses.filter(course => course._id === args.id)
        return course.pop()
    }
  }
}
