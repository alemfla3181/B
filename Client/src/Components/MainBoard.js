import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function MainBoard() {
  const [User, setUser] = useState(false);
  const [Contents, setContents] = useState([{
    title: '',
    content: '',
    writer: ''
  }])

  useEffect(() => {
    if (window.sessionStorage.getItem("user_Email", JSON.stringify(User))) {
      setUser(true);
    }

    getContent();
  }, [])

  const getContent = () => {
    axios.get("/api/contents/Board").then((response) => {
      if (response.data.success) {
        setContents(response.data.contents);
        console.log(response.data.contents);


      } else {
        alert("글 내용 가져오기 실패!");
      }
    })
  }
  
  const onDelete = () => {
    let body = {
      writer: window.sessionStorage.getItem("user_Email"),
    }
    
    if (window.confirm('삭제하시겠쑵니까?')) {
      axios.post('/api/contents/deleteBoard', body).then(response => {
        if (response.data.success) {
          console.log("삭제 완료");
        } else {
          alert("글 내용 삭제 실패");
        }
      })
    }
  }

  return (
    <div className='LandingPage'>
      {!User ?
        <div>
          <Header />
          <div className='button'>
            <button><Link to='/login'>로그인</Link></button>
            <button><Link to='/register'>회원가입</Link></button>
          </div>
          <Footer />
        </div>
        : <div>
          <Header />
          <div className="board-list">
            <div className="common-buttons">
            </div>
            <table className="w3-table-all">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>제목</th>
                  <th>작성자</th>
                </tr>
              </thead>
              <tbody>
                {
                  Contents.map((item, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.name}</td>
                        <button onClick={onDelete}>X</button>
                        </tr>                       
                        )
                  })
                }
              </tbody>
            </table>
          </div>
          <button><Link to='/write'>글쓰기</Link></button>
          <Footer />
        </div>        
      }
    </div>
  )
}

export default MainBoard