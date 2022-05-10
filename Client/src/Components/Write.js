import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header';

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
    }

    return (
        <div>
            <Header />
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
            }}>
                <form style={{ display: 'flex', flexDirection: 'column' }}
                    onSubmit={onSubmitHandler}>
                    <label>Title</label>
                    <input type="title" value={Title} onChange={onTitleHandler} />
                    <label>Content</label>
                    <textarea type="content" value={Content} onChange={onContentHandler} />
                    <br />
                    <button type="submit">Write</button>
                    <button type="reset">Cancel</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Write