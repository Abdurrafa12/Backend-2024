// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static create(data) {
    // Contoh simulasi penyimpanan data ke database
    const newStudent = {
      id: new Date().getTime(), // ID unik (misalnya timestamp)
      ...data, // Memasukkan data yang diberikan
    };
    // Simulasikan data disimpan ke database
    console.log("Data student berhasil disimpan:", newStudent);
    return newStudent;
  }
}

// export class Student
module.exports = Student;