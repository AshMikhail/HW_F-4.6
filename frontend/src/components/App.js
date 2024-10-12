import { Link, Route, Routes } from 'react-router-dom';
import '../styles/App.css'
import React from 'react';

import recipes from './recipes';
import Dishes from './Dishes';
import Category from './Category';
import CategoryList from './Category_list';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/categoryes" className='link'>Все Категории</Link>
        <Link to="/" className='link'>Главная страница</Link>
      </nav>
      <Routes>
        <Route path='/' Component={recipes}/>
        <Route exaxt path={'/dishes/:id'} Component={Dishes}/>
        <Route exaxt path={'/categoryes'} Component={CategoryList}/>
        <Route exaxt path={'/category/:category'} Component={Category}/>
      </Routes>
    </div>
  );
}

export default App;
