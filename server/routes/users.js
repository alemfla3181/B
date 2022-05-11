const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

//=================================
//             User
//=================================

// 로그인 정보 확인
// router.get("/auth", auth, (req, res) => {
//   res.status(200).json({
//       _id: req.user._id,
//       isAdmin: req.user.role === 0 ? false : true,
//       isAuth: true,
//       email: req.user.email,
//       name: req.user.name,
//       lastname: req.user.lastname,
//       role: req.user.role,
//       image: req.user.image,
//   });
// });

// 회원가입
router.post('/api/users/register', (req, res) => {
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


module.exports = router;