import React from 'react';
import './App.css';
import Posts from './components/Posts/Posts';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
// import Tabs from './components/Extra/Tabs';
import AddPost from './components/AddPost/AddPost';
import Main from './components/Main/Main';
import Errordata from './components/Error/Errordata'; 
import Header1 from './components/Header/Header1';
import User from './components/User/User';
// import Header from './components/Header/Header';


function App() {
  return (
    

    <HashRouter>
    
    <Header1/>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/AddPost' element={<AddPost/>} />
      <Route path='/Login' element={<Login />} />
      <Route path='/User' element={<User />} />
      <Route path='*' element={<Error />} />
    </Routes>
    </HashRouter>

    // <Tabs />
    // <Header1/>
  );
}

export default App;
