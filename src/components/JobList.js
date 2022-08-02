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
    <div>{data.slice(0,10).map((job, i)=>(
        <Grid key={i+1} item>

            <JobCard key={i+1} job={job}/>
        </Grid>

    ))}</div>
  )
}

export default JobList