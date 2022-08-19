import { Grid } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import apiService from '../dataApi/apiService'
import JobCard from './JobCard'


function JobList() {
  let location = useLocation()
  
  let state = location.state

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
    <div>{data.slice(0,6).map((job, i)=>(
      <Grid container spacing={1}>
        <Grid key={i+1} item>
            <JobCard key={job.id} job={job}/>
        </Grid>
      </Grid>
    ))}</div>
  )
}

export default JobList