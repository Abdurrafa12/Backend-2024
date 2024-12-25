// TODO 3: Import data students dari folder data/students.js
const students = require('../data/students.js');

class StudentController {
  // TODO 4: Tampilkan data students
  index(req, res) {
    res.json({
      message: "Menampilkan semua students",
      data: students
    });
  }

  // TODO 5: Tambahkan data students
  store(req, res) {
    const { name } = req.body; // Nama student baru
    students.push(name);
    res.json({
      message: `Menambahkan data student: ${name}`,
      data: students
    });
  }

  // TODO 6: Update data students
  update(req, res) {
    const { id } = req.params; // ID student yang akan diubah
    const { name } = req.body; // Nama baru
    if (students[id]) {
      students[id] = name;
      res.json({
        message: `Mengedit student id ${id}, nama ${name}`,
        data: students
      });
    } else {
      res.status(404).json({
        message: `Student dengan id ${id} tidak ditemukan`
      });
    }
  }

  // TODO 7: Hapus data students
  destroy(req, res) {
    const { id } = req.params; // ID student yang akan dihapus
    if (students[id]) {
      students.splice(id, 1); // Hapus student berdasarkan index
      res.json({
        message: `Menghapus student id ${id}`,
        data: students
      });
    } else {
      res.status(404).json({
        message: `Student dengan id ${id} tidak ditemukan`
      });
    }
  }
}

module.exports = new StudentController();
