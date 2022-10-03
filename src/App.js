import { Button} from '@mui/material';
import React from 'react';
import LoginForm from './components/LoginForm';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LayOut from './components/LayOut';
import JobModal from './components/JobModal';
import HomePage from './components/HomePage';
import RequireAuth from './authentication/RequireAuth';
import AuthProvider from './authentication/AuthProvider';



function App() {
 let location = useLocation()
 let state = location.state
 console.log(state, location)

  return (
  <AuthProvider>

  <Routes location={state?.backGroundLocation || location}>
      <Route path='/' element={<LayOut/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/login' element={<OpenModal/>}/>
            <Route path='/job/:id' element={
              <RequireAuth>
                <JobModal/>
              </RequireAuth>
            } /> 
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
  let navigate = useNavigate()
  const [showModal, setShowModal] = React.useState(true)

  const ModalHandler = () => {
    setShowModal(!showModal)
    navigate('/')
  }
  console.log(showModal)

  return(
    <>
    {/* <Link to="/login"> */}
    <Button as={Link} to='/login' sx={{bgcolor: 'Orange' }} variant="contained" color="secondary" onClick={ModalHandler}>Sign in</Button>
    {/* </Link> */}
    {/* {!auth.user ? (<Button as={Link} to='/login' sx={{bgcolor: 'Orange' }} variant="contained" color="secondary" onClick={ModalHandler}>Sign in</Button>) : (<Button onClick={handleSignout} sx={{bgcolor: 'Orange' }} variant="contained" color="secondary">Log Out</Button>)} */}
    <LoginForm props={showModal} ModalHandler={ModalHandler}/>
    </>
  )
}

export {App, OpenModal};
