// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  } 
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  db.collection('Users').deleteMany({name: 'Valentin'});

  // delete Document by ID
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5b9006158cb06b7dba247adb")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // client.close();
});