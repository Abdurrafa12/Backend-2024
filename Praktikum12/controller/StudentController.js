const Student = require('./models/Student');

class StudentController {
  static create(req, res) {
    /**
     * TODO 2: Rewangi Method create.
     * - Method menerima parameter data dari `req.body`.
     * - Mengembalikan data student yang baru diinsert.
     */
    const data = req.body; // Ambil data dari request body
    const newStudent = Student.create(data); // Simpan data menggunakan model
    res.status(201).json({
      message: "Menambahkan data student",
      data: newStudent,
    });
  }
}

module.exports = StudentController;
