const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["POST", "GET", "DELETE", "PUT"],
  credentials: true
}));

// Serve files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'db/uploads')));
