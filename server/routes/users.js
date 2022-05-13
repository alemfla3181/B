const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

router.post('/register', (req, res) => {
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

router.post('/login', (req, res) => {
  let id = req.body.id;
  let password = req.body.password;
  
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "가입된 이메일이 없습니다."
      });      
    } else {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch) {
          return res.json({
            loginSuccess: false,
            message: "비밀번호를 다시 입력하세요"
          })
        } else {
          return res.json({
            loginSuccess: true,
            message: "login successful!!"
          });
        }
      })     
    }
  })
})

module.exports = router;