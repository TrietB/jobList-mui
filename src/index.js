import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import JobCard from './components/JobCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
      <Route path='/' element={<App/>}>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/job' element={<JobCard/>} />
      </Route>    
</Routes>
</BrowserRouter>
)