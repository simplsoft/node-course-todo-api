const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5b9b48b21844e5e7c98b8ceb'}).then((todo) => {
  console.log(todo);
})

Todo.findByIdAndRemove('5b9b48b21844e5e7c98b8ceb').then((todo) => {
  console.log(todo);
});