const express = require("express");
const app = express();
const connection = require('./config/dbConfig.js');
const port = 3000;
app.use(express.json());

app.get("/", (req, res)=>{
    res.json({message: "hello world"})
})

app.listen(port, () => console.log(`server running on port ${port}`));

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

// type it in workbench/client if you get error while connecting to db
// "alter user 'root'@'localhost' identified with mysql_native_password by 'MeherBaba@7'"; 
