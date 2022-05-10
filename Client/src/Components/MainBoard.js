import React from 'react'
import Footer from './Footer';
import Header from './Header';

function MainBoard() {
    return (
        <div>
            <Header />
            <div>
                <button><a href='/login'>로그인</a></button>
                <button><a href='/register'>회원가입</a></button>
            </div>
            <Footer />
        </div>
    )
}

export default MainBoard