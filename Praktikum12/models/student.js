class Student {
    constructor(id, name, nim, email, jurusan) {
      this.id = id;
      this.name = name;
      this.nim = nim;
      this.email = email;
      this.jurusan = jurusan;
      this.created_at = new Date();
      this.updated_at = null;
    }
  
    static create(data) {
      // Simulasi menambahkan data ke "database"
      const newStudent = new Student(
        Math.floor(Math.random() * 1000), // Simulasi ID unik
        data.name,
        data.nim,
        data.email,
        data.jurusan
      );
      return newStudent;
    }
  }
  
  module.exports = Student;
  