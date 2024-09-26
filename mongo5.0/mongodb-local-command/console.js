show dbs;

use mymgdb;

show dbs;

db.users.insertOne({name: "John", age: 25, status: "A"});
db.users.insertOne({name: "linsz", age: 22, status: "B"});
db.users.insertOne({name: "linsz", age: 22, status: "B", groups: ["news", "sports"]});

db.users.find();

db.users.drop();