import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

function MiddleDividers({job}) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
            <Typography gutterBottom variant="h4" component="div" textAlign='center'>
1</Typography>
        <Divider variant="middle" />
        <Stack direction="row" spacing={1} sx={{mt:1, mb:1}}>
          <Chip label="Extra Soft" />
          <Chip color="primary" label="Soft" />
          <Chip label="Medium" />
          <Chip label="Hard" />
        </Stack>
        <Typography color="text.secondary" variant="body2">
            height
        </Typography>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1, textAlign:'center' }} >
        <Button>LEARN MORE</Button>
      </Box>
    </Box>
  );
}

export default MiddleDividers
