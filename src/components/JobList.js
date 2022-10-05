import { Grid } from '@mui/material'
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
    <Grid container spacing={1} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
    {data.slice(0,8).map((job, i)=>(
        <Grid item key={i} xs={12} md={6} lg={3} >
            <JobCard key={job.id} job={job}/>
        </Grid>
    ))}
    </Grid>
  )
}

export default JobList