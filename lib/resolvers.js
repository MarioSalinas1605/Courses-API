'use strict'

const courses = [
  {
    _id: 'any id',
    title: 'my title',
    teacher: 'mi teacher',
    description: 'My description',
    topic: 'programming'
  },
  {
    _id: 'any id',
    title: 'my title 2',
    teacher: 'mi teacher',
    description: 'My description',
    topic: 'programming'
  },
  {
    _id: 'any id',
    title: 'my title 3',
    teacher: 'mi teacher',
    description: 'My description',
    topic: 'programming'
  }
]

module.exports = {
  getCourses: () => courses
}
