import { Grid } from '@mui/material';
import PrimarySearchAppBar from './components/SearchAppBar';
import JobCard from './components/JobCard';
import Theming from './theme/ThemeProvider';
import jobList from './jobList.json'
import BasicPagination from './components/Pagination';
import ToggleTheme from './components/ToggleTheme';


function App() {
  return (
    <Theming>
    <PrimarySearchAppBar/>
    <ToggleTheme>
      </ToggleTheme>
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {jobList.slice(0,6).map((job, i)=>{
        console.log(job.title)
        return(
          <Grid item>
        <JobCard key={i+1} job={job}/> 
      </Grid>
      )})}
    </Grid>
    <BasicPagination/>
    </Theming>
  );
}

export default App;
