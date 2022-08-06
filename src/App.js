import { Grid } from '@mui/material';
import PrimarySearchAppBar from './components/SearchAppBar';
import Theming from './theme/ThemeProvider';
import BasicPagination from './components/Pagination';
import ToggleTheme from './components/ToggleTheme';
import JobList from './components/JobList';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <Theming>
    <PrimarySearchAppBar/>
    <ToggleTheme/>
    <Grid container spacing={2} alignItems="center" justifyContent="center">
        <JobList/>
    </Grid>
    <BasicPagination/>
    </Theming>
  );
}

export default App;
