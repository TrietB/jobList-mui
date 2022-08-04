import { Grid } from '@mui/material';
import PrimarySearchAppBar from './components/SearchAppBar';
import JobCard from './components/JobCard';
import Theming from './theme/ThemeProvider';
import jobList from './jobList.json'
import BasicPagination from './components/Pagination';
import ToggleTheme from './components/ToggleTheme';
import { useEffect } from 'react';
import axios from 'axios';
import apiService from './dataApi/apiService';
import JobList from './components/JobList';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <Theming>
    <PrimarySearchAppBar/>
    <ToggleTheme>
      </ToggleTheme>
    <Grid container spacing={2} alignItems="center" justifyContent="center">
        <JobList/>
    </Grid>
    <BasicPagination/>
    <LoginForm/>
    </Theming>
  );
}

export default App;
