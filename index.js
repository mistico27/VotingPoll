import app from './app.js';
import connection from './db.js';

connection();

app.listen(3580)
console.log('i am connect in Server Port', 3580);