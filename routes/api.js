const StudentController = require("../controllers/StudentController");
const express = require("express");
const router = express.Router();

router.get('/', StudentController.index);       // Tampilkan semua data
router.post('/', StudentController.store);      // Tambah data student
router.put('/:id', StudentController.update);   // Update data student
router.delete('/:id', StudentController.destroy); // Hapus data student

module.exports = router;