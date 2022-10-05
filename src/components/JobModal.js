import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chip, Stack } from '@mui/material';
import  { useNavigate, useParams } from "react-router-dom"
import apiService from '../dataApi/apiService';

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
  alignItems: 'center',
  justifyContent: 'center'
};

export default function JobModal() {
  const [ openModal, setOpenModal] = React.useState(true)
  let {id} = useParams()
  const [job, setJob] = React.useState(null)
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: jobData} = await apiService.get(`/jobs/${id}`)
        setJob(jobData)
        console.log(jobData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [])
  

  let navigate = useNavigate()
  const handleModal = ()=>{
    navigate('/')
    setOpenModal(!openModal)
  }

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {job?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {job?.description.slice(0,150)}
          </Typography>
          <Typography sx={{mt: 2}}>
            Skills:
            <Stack direction="row" sx={{ mb:1}}>
        {job?.skills.slice(0,4).map((skill, i)=>(
          <Chip key={i+1} label={skill} color='secondary' sx={{mr:.5, fontSize:9}} size='small'/>
          ))}
            </Stack>
          </Typography>
          <Typography sx={{mt:2}}>
            Location: {job?.city}
          </Typography>
        </Box>
      </Modal>
    </>
    
  );
}
