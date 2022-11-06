import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <div  className='app'>
        <ul className='nav'>
          <li className='logo'>Exam</li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/customhook'>Customhook</Link></li>    
        <li><Link to='/usereducer'>Usereducer</Link></li>    
        <li><Link to='/errorbandtest'>Testerrorband</Link></li>    
        </ul>
        <Outlet/>
    </div>
  )
}

export default Layout