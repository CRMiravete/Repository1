const express= require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res)=> {
    res.write("Hello World");
    res.send();
});

app.listen(3000, ()=> {
    console.log("Listening to port 3000")
});