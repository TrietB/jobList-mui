import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, {useEffect, useState} from 'react'
import apiService from '../dataApi/apiService'
import JobCard from './JobCard'


function JobList() {

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const {data: jobData} = await apiService.get('jobs')
            setData(jobData)
          } catch (error) {
            console.log(error)
          }
        }
        fetchData()
      }, [])
    
  return (
    <Container sx={{ width: '100vw'}}>

    <Grid container spacing={3} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
    {data.slice(0,8).map((job, i)=>(
      <Grid item key={i} xs={12} md={6} xl={4} >
            <JobCard key={job.id} job={job}/>
        </Grid>
    ))}
    </Grid>
    </Container>
  )
}

export default JobList