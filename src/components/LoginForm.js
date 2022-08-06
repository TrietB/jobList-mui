import React from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chip, Stack, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection:'column'
};

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(errors);
  
  return (
    <>
    <Button sx={{bgcolor: 'Orange' }} variant="contained" color="secondary" onClick={handleOpen}>Sign in</Button>
    <Modal open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
    <Box sx={style} component='form' onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h3' sx={{mb:2}}>Please Sign In</Typography>
    <TextField sx={{mb:2}}
          required
          id="outlined-required"
          label="Name"
          {...register("Name", {})}
          // defaultValue="Hello World"
        />
    <TextField sx={{mb:2}}
          required
          type={'password'}
          id="outlined-disabled"
          label="Password"
          {...register("Password", {})}
          // defaultValue="Hello World"
        />
    <Button variant="outlined" type='submit'>
      Submit
    </Button>
    </Box>
    </Modal>
    </>

  );
}