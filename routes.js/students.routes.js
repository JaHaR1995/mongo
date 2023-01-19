

const {Router} = require('express')

const {studentsControllers} = require('../controllers/student.controller');

const router = Router()

router.get('/students', studentsControllers.getStudent);

router.post('/students', studentsControllers.addStudent);

router.delete('/students/id:', studentsControllers.deleteStudent);

router.patch('/students/id:', studentsControllers.deleteStudent);

module.exports = router 