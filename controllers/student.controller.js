const Student = require("../models/Student.models");

module.exports.studentsControllers = {
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
        await Student.findByIdAndRemove(req.params.id)
        return res.json('Student deleted')
    } catch (error) {
       return res.json(error.message) 
    }
  },  

  getStudent: async (req, res) =>{
    try {
        await Student.find()
        return res.json('Студент запрошен')
    } catch (error){
        return res.json(error)
    }
  },
  

  patchStudent: async (req, res) =>{
    try{
        await Student.findByIdAndUpdate(req.params.id,  {name: req.body.name})
        return res.json('Студент изменен')
    } catch (error){
        return res.json(error) 
    }
  },
 
};

