import React from 'react'
import '../style/style.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <nav class="navbar">
            <ul class="nav-links">
                <li><Link to="/task-1">Task 1</Link></li>
                <li><Link to="/task-2">Task 2</Link></li>
                <li><Link to="/task-3">Task 3</Link></li>
                <li><Link to="/task-4">Task 4</Link></li>
                <li><Link to="/task-5">Task 5</Link></li>
                <li><Link to="/task-6">Task 6</Link></li>
            </ul>
        </nav>
    )
}

export default Header