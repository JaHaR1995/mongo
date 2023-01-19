const Student = require("../models/Student.model");

module.exports.studentsController = {
  addStudent: (req, res) => {
    Student.create({
      name: "имя студента",
      phone: "номер телефона",
      age: 19, // возраст
    })
      .then(() => {
        res.json("Студент добавлен");
      })
      .catch(() => {
        res.json("error");
      });
  },

  //   deleteStudent: (req, res) => {
  //     Student.findByIdAndRemove(req.params.id)
  //       .then(() => {
  //         res.json("Студент удален");
  //       })
  //       .catch(() => {
  //         res.json("error");
  //       });
  //   },

  deleteStudent: async (req, res) => {
    try {
      await Student.findByIdAndRemove(req.params.id);
      return res.json("Student deleted");
    } catch (error) {
      return res.json(error.message);
    }
  },

  getStudents: async (req, res) => {
    try {
      const students = await Student.find();
      return res.json(students);
    } catch (error) {
      return res.json(error);
    }
  },

  getStudent: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      return res.json(student);
    } catch (error) {
      return res.json(error);
    }
  },

  patchStudent: async (req, res) => {
    try {
      await Student.findByIdAndUpdate(req.params.id, { name: req.body.name });
      return res.json("Студент изменен");
    } catch (error) {
      return res.json(error);
    }
  },
};
