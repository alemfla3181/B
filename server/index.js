const express = require("express");
const app = express();
const path = require("path");
// const cors = require("cors");
const { User } = require('./models/User')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// app.use(cors());


const mongoose = require("mongoose");
const connect = mongoose
.connect(config.mongoURI, {
    useUnifiedTopology:true
})
.then(() => console.log("MongoDB Connected..."))
.catch((err) => console.log(err));


app.post('/api/users/register', (req, res) => {
    // 회원 가입할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다
    const user = new User(req.body)
    // User.js의 userSchema.pre가 동작한 다음 비밀번호를 hash한 후 next()로 넘어온다.
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ // status(200)은 성공했다는 의미
            success: true
        })
    })
})
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