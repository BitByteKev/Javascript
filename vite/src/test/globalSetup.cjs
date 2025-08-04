const mongoose = require('mongoose');

module.exports = async () => {
  await mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('✅ [globalSetup] MongoDB connected');
};