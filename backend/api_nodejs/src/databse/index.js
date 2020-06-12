const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports = mongoose;