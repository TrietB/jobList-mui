import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chip, Stack } from '@mui/material';

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
  alignItems: 'center',
  justifyContent: 'center'
};

export default function JobModal({job}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button sx={{bgcolor: 'Orange' }} variant="contained" color="secondary" onClick={handleOpen}>learn more</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {job.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {job.description.slice(0,150)}
          </Typography>
          <Typography sx={{mt: 2}}>
            Skills:
            <Stack direction="row" sx={{ mb:1}}>
        {job.skills.slice(0,4).map((skill, i)=>(
          <Chip key={i+1} label={skill} color='secondary' sx={{mr:.5, fontSize:9}} size='small'/>
          ))}
            </Stack>
           </Typography>
           <Typography sx={{mt:2}}>
            Location: {job.city}
           </Typography>
        </Box>
      </Modal>
    </>
    
  );
}
