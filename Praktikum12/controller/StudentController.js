// import Model Student
const Student = require("./models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();
    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
  }

  store(req, res) {
    // Data yang diterima dari request
    const { name, age, grade } = req.body;
    const newStudent = Student.create({ name, age, grade });
    const data = {
      message: "Menambahkan data student",
      data: newStudent,
    };

    res.json(data);
  }
}
const object =new StudentController();

module.exports = object;