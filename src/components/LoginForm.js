import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection:'column'
};

export default function LoginForm({props, ModalHandler}) {
  const [username] = useState('TrietB')
  const { register, handleSubmit, formState: { errors } } = useForm();
  let navigate = useNavigate()
  let location = useLocation()
  let auth = useAuth()
  let from = location.state?.from?.pathname || '/';
  const onSubmit = (data) =>{
    auth.signin(data.Name, ()=>{
      navigate(from)
    })
  }
  console.log(from)
  console.log(errors);
  
  return (
    <>
    <Modal open={props}
        onClose={ModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
    <Box sx={style} component='form' onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h3' sx={{mb:2, width:200, mr: 'auto', ml:'auto' }}>Sign In</Typography>
    <TextField sx={{mb:2}}
          required
          id="outlined-required"
          label="Name"
          {...register("Name", {})}
          defaultValue={username}
        />
    <TextField sx={{mb:2}}
          required
          type={'password'}
          id="outlined-disabled"
          label="Password"
          {...register("Password", {})}
          // defaultValue="Hello World"
        />
    <Button variant="outlined" type='submit' >
      Submit
    </Button>
      </Box>
    </Modal>
    </>

  );
}