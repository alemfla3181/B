import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <header align='center'>
                <h1><Link to="/">Board</Link></h1>
            </header>
        </div>
    )
}

export default Header