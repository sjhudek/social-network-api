const express = require('express');
const app = express();

// Just require the connection.js here; it will automatically connect to MongoDB
require('./config/connection');

app.use(express.json());

const userRoutes = require('./routes/api/users');
const thoughtRoutes = require('./routes/api/thoughts');

app.get('/', (req, res) => {
    res.send('Welcome to the Social Network API!');
});
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
