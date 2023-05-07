const mongoose = require('mongoose');

const url ="mongodb+srv://shailendra:12345@cluster0.o8kecdl.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});

module.exports = mongoose;