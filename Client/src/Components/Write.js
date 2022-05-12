import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import axios from "axios";
import './Write.css';

function Write() {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Name, setName] = useState("");

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
      name : window.sessionStorage.getItem("user_Email"),
      title: Title,
      content: Content
    }

    axios.post('/api/contents/createBoard', body).then(response => {
      if (response.data.success) {
        window.location.href = "/";
      }
      console.log(Response.data);
    })
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
          <button type="reset"><a href='/'>Cancel</a></button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Write