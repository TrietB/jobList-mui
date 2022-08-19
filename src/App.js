import { Button, Grid } from '@mui/material';
import React from 'react';
import PrimarySearchAppBar from './components/SearchAppBar';
import Theming from './theme/ThemeProvider';
import BasicPagination from './components/Pagination';
import ToggleTheme from './components/ToggleTheme';
import JobList from './components/JobList';
import LoginForm from './components/LoginForm';
import { Link, Route, Routes, Outlet, useLocation, BrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut';
import JobModal from './components/JobModal';
import HomePage from './components/HomePage';
import RequireAuth from './authentication/RequireAuth';
import AuthProvider from './authentication/AuthProvider';


function App() {
 let location = useLocation()
 let state = location.state
 console.log(state)
  return (
  <AuthProvider>

  <Routes location={state?.backGroundLocation || location}>
      <Route path='/' element={<LayOut/>}>
            <Route index element={<HomePage/>}/>
      </Route>    
  </Routes>

  {state?.backGroundLocation && (
    <Routes>
            <Route path='/login' element={<OpenModal/>}/>
            <Route path='/job/:id' element={
              <RequireAuth>
                <JobModal/>
              </RequireAuth>
            } />  
  </Routes>)}
  </AuthProvider>
  );
}
 
function OpenModal(){
  const [showModal, setShowModal] = React.useState(true)

  const ModalHandler = () => {

    setShowModal(!showModal)
  }
  console.log(showModal)

  return(
    <>
    <Link to="/signin">
    <Button sx={{bgcolor: 'Orange' }} variant="contained" color="secondary" onClick={ModalHandler}>Sign in</Button>
    </Link>
    <LoginForm props={showModal} ModalHandler={ModalHandler}/>
    </>
  )
}

export {App, OpenModal};
