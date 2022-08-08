import { Box, Chip, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import JobModal from './JobModal'


function JobCard({job}) {
  return (
  <Box sx={{ width: 400,height:300, maxWidth: 600, bgcolor: 'black', border:1, mt:1,mb:1 }}>
    <Box sx={{ my: 3, mx: 2, height:200,  }}>
        <Typography gutterBottom variant="h5" component="div" textAlign='center' color="common.white">
          {job.title}
        </Typography>
    <Divider variant="middle" />
    <Stack direction="row" sx={{mt:1, mb:1}}>
        {job.skills.slice(0,4).map((skill, i)=>(
            <Chip key={i+1} label={skill} color='secondary' sx={{mr:.5, fontSize:9}} size='small'/>
            ))}
    </Stack>
      <Typography color="common.white" variant="body2" marginTop={2}>
          {job.description.slice(0,199)}...
      </Typography>
    </Box>
    <Box sx={{ mt: 3, ml: 1, mb: 1, textAlign:'center' }} >
        <JobModal job={job}/>
    </Box>
  </Box>  
  )
}

export default JobCard