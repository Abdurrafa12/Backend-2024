// Import AlumniController
const AlumniController = require('./AlumniController');

// Import express
const express = require("express");

// Membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Alumni API Express");
});

// Membuat routing alumni
router.get("/alumni", AlumniController.getAll); // Mendapatkan semua data alumni
router.get("/alumni/:id", AlumniController.getById); // Mendapatkan data alumni berdasarkan ID
router.post("/alumni", AlumniController.create); // Menambahkan data alumni baru
router.put("/alumni/:id", AlumniController.update); // Mengupdate data alumni berdasarkan ID
router.delete("/alumni/:id", AlumniController.delete); // Menghapus data alumni berdasarkan ID

// Export router
module.exports = router;
