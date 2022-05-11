import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header align='center'>
                <h1><Link to="/">Board</Link></h1>
            </header>
            <hr />
        </div>
    )
}

export default Header