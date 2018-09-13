var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

/*
  -- ES6 Object destructuring
  let user = {name: 'Jon', age: 26};
  let {name} = user;
  console.log(name); --> Jon
*/
