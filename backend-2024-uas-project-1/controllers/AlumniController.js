// Import Model Alumni
const Alumni = require('./models/Alumni');

// Buat class AlumniController
class AlumniController {
  // Fungsi untuk mendapatkan semua data alumni
  async getAll(req, res) {
    try {
      const alumni = await Alumni.find(); // Mengambil semua data alumni dari database
      res.status(200).json(alumni);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching alumni data', error });
    }
  }

  // Fungsi untuk mendapatkan data alumni berdasarkan ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const alumni = await Alumni.findById(id); // Mengambil data alumni berdasarkan ID

      if (!alumni) {
        return res.status(404).json({ message: 'Alumni not found' });
      }

      res.status(200).json(alumni);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching alumni data', error });
    }
  }

  // Fungsi untuk menambahkan data alumni baru
  async create(req, res) {
    try {
      const newAlumni = new Alumni(req.body); // Membuat instance baru dari model Alumni
      const savedAlumni = await newAlumni.save(); // Menyimpan data ke database
      res.status(201).json(savedAlumni);
    } catch (error) {
      res.status(500).json({ message: 'Error creating alumni', error });
    }
  }

  // Fungsi untuk mengupdate data alumni berdasarkan ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const updatedAlumni = await Alumni.findByIdAndUpdate(id, req.body, { new: true }); // Mengupdate data alumni berdasarkan ID

      if (!updatedAlumni) {
        return res.status(404).json({ message: 'Alumni not found' });
      }

      res.status(200).json(updatedAlumni);
    } catch (error) {
      res.status(500).json({ message: 'Error updating alumni', error });
    }
  }

  // Fungsi untuk menghapus data alumni berdasarkan ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedAlumni = await Alumni.findByIdAndDelete(id); // Menghapus data alumni berdasarkan ID

      if (!deletedAlumni) {
        return res.status(404).json({ message: 'Alumni not found' });
      }

      res.status(200).json({ message: 'Alumni deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting alumni', error });
    }
  }
}

// Membuat object AlumniController
const object = new AlumniController();

// Export object AlumniController
module.exports = object;
