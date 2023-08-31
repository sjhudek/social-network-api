const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/socialnetworkapp';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connectionString;
