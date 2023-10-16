const moongoose = require ("mongoose")

const studentSchema = require ("../schema/student.schema")

const studentModel = moongoose.model ("students", studentSchema)

module.exports = studentModel