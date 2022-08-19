import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, OpenModal } from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import JobCard from './components/JobCard';
import JobModal from './components/JobModal';
import HomePage from './components/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
      <App/>
      </BrowserRouter>
)