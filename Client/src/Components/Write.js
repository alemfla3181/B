import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import axios from "axios";
import './Write.css';

function Write() {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value)
  }
  const onContentHandler = (event) => {
    setContent(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    console.log(event);
    event.preventDefault();

    let body = {
      name: window.sessionStorage.getItem("user_Email"),
      title: Title,
      content: Content
    }

    if (window.confirm("저장해라")) {

      axios.post('/api/contents/createBoard', body).then(response => {

        if (response.data.success) {
          window.location.href = "/";
        }
        console.log(Response.data);
      })
    }

  }

  return (
    <div className='LandingPage'>
      <Header />
      <div>
        <form style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={onSubmitHandler}>
          <label>Title</label>
          <input type="title" value={Title} onChange={onTitleHandler} />
          <label>Content</label>
          <textarea type="content" value={Content} onChange={onContentHandler} />
          <br />
          <button type="submit">Write</button>
          <Link to="/"><button type="reset">Cancel</button></Link>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Write