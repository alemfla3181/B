import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';



function MainBoard() {

    const [User, setUser] = useState(false);
    
    useEffect(() => {
        if (window.sessionStorage.getItem("user_Email", JSON.stringify(User))) {
            setUser(true);
        }
    },[])

    return (
        <div>
            {!User ?
                <div>
                    <Header />
                        <div>
                            <button><Link to='/login'>로그인</Link></button>
                            <button><Link to='/register'>회원가입</Link></button>
                        </div>
                    <Footer />
                </div>
                : <div>
                    fuck
                </div> 
        }
        </div>
    )
}

export default MainBoard