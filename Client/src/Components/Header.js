import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  const [Style, setStyle] = useState({ diplay: 'none' });
  const Email = window.sessionStorage.getItem("user_Email");

  return (
    <div>
      <header align='center'>
        <Link to="/"><h1 className='header'>Board</h1></Link>
        {props.user ?
          <div className='user'>
            사용자:{Email}
          </div>
          :<div>
          </div>
        }
      </header>
    </div>
  )
}

export default Header