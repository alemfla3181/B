import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header align='center'>
            <Link to="/"><h1 className='header'>Board</h1></Link>
            </header>
        </div>
    )
}

export default Header