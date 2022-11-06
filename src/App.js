import './App.css';
import {Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout'
import Customhook from './pages/Customhook'
import Error from './pages/Error'
import Errorbandtest from './pages/Errorbandtest'
import Usereducer from './pages/Usereducer'
import Home from './pages/Home'


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='/customhook'  element={<Customhook/>}/>
           <Route path='/usereducer'  element={<Usereducer/>}/>
           <Route path='/errorbandtest'  element={<Errorbandtest/>}/>
           <Route path='*' element={<Error/>}/>
       </Route>
        </Routes>
    </div>
  );
}

export default App;
