const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./config/dbConfig');
const contactRoutes = require('./routes/contactRoutes');

// Middleware
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

// Connect to MongoDB
dbConfig();

// Use routes
app.use('/contacts', contactRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
