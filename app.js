const express = require('express');
const app = express();
const studentRoutes = require('./routes/students.js');

app.use(express.json()); // Middleware untuk parsing JSON
app.use('/students', studentRoutes); // Gunakan routes students

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
