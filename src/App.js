import { Button, Grid } from '@mui/material';
import React from 'react';
import PrimarySearchAppBar from './components/SearchAppBar';
import Theming from './theme/ThemeProvider';
import BasicPagination from './components/Pagination';
import ToggleTheme from './components/ToggleTheme';
import JobList from './components/JobList';
import LoginForm from './components/LoginForm';
import { Link, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Theming>
    <PrimarySearchAppBar/>
    <JobList/>
    <BasicPagination/>
    </Theming>
  );
}
 
function OpenModal(){
  const [showModal, setShowModal] = React.useState(false)

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
