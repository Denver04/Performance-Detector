const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const { type } = require("os");
const {spawn} = require('child_process');
// const multer = require("multer");

const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const upload = multer({ dest: 'uploads/' });

const PORT = process.env.PORT || 5000;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // * = all domains
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        // Allow these methods
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.get("/", (req , res , next) => {
    res.send("Hello from Express!");
})

app.post("/employee" , (req , res , next) => {
    const input = req.body;
    
    const jsonString = JSON.stringify(input)
    fs.writeFile('./employee', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })


    var dataToSend;
    const python = spawn('python', ['script.py']);
    python.stdout.on('data', function (data) {
    dataToSend = data.toString();
    });
    python.on('close', (code) => {
    res.send(dataToSend)
    })
    // fs.unlink("./employee.json", (err) => {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //     console.log("File deleted successfully!");
    //   });
    // });

    // res.write("hello sent");
    // res.end();
});

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});