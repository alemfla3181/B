const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { User } = require('./models/User')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors());

const mongoose = require("mongoose");
const connect = mongoose
.connect(config.mongoURI, {
    useUnifiedTopology:true
})
.then(() => console.log("MongoDB Connected..."))
.catch((err) => console.log(err));

app.use("/api/users", require("./routes/users"));
app.use("/api/contents", require("./routes/contents"));

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    // Set static folder
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("client/build"));

    // index.html for all page routes    html or routing and naviagtion
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server Listening on ${port}`);
});