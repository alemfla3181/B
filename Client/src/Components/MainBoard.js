import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function MainBoard() {
    return (
        <div>
            <Header />
            <div>
                <button><Link to='/login'>로그인</Link></button>
                <button><Link to='/register'>회원가입</Link></button>
            </div>
            <Footer />
        </div>
    )
}

export default MainBoard