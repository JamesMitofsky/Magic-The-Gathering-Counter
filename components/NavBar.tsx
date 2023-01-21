import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CasinoIcon from '@mui/icons-material/Casino';

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <CasinoIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 3 }}>
            Parker's MTG Counter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
