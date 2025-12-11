import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='link'>
        <Link  className='linkchild'  to="/task-1">See Task 1</Link>
        <Link className='linkchild' to="/task-2">See Task 2</Link>
        <Link className='linkchild' to="/task-3">See Task 3</Link>
        <Link className='linkchild' to="/task-4">See Task 4</Link>
        <Link  className='linkchild' to="/task-5">See Task 5</Link>
        <Link className='linkchild' to="/task-6">See Task 6</Link>
    </div>
  )
}

export default Home