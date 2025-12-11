import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Task1 from '../pages/task1'
import Task2 from '../pages/task2'
import Task3 from '../pages/task3'
import Task4 from '../pages/task4'
import Task5 from '../pages/task5'
import Task6 from '../pages/Task6'
import Home from '../pages/Home'


const Routing = () => {
  return (
   <Router>
        <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path="/task-1" element={<Task1/>}/>
            <Route path="/task-2" element={<Task2/>}/>
            <Route path="/task-3" element={<Task3/>}/>
            <Route path="/task-4" element={<Task4/>}/>
            <Route path="/task-5" element={<Task5/>}/>
            <Route path="/task-6" element={<Task6/>}/>
        </Routes>
   </Router>
  )
}

export default Routing