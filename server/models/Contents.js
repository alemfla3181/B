const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentsSchema = mongoose.Schema({

  writer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  
  name: {
    type: String
  },

  title: {
    type: String
  },

  content: {
    type: String
  },

  comment: {
    type: String
  }

}, { timestamps: true })



const Contents = mongoose.model('Contents', ContentsSchema);

module.exports = { Contents }