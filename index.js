const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./config/dbConfig.js');
const port = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const userRoutes = require('./routes/user.route.js');

app.get("/", (req, res)=>{
    res.json({message: "hello world"})
})

app.use('/users', userRoutes );

// APIs
//  GET/users/  ---> all users;
//  POST/users/createUser--> creates user; 
//  GET/users/:id --> get user with specific id;



app.listen(port, () => console.log(`server running on port ${port}`));

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

// type it in workbench/client if you get error while connecting to db
// "alter user 'root'@'localhost' identified with mysql_native_password by 'MeherBaba@7'"; 
