import * as React from 'react';
import './style.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import { Container, Box } from '@mui/material';

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <NavBar />
      <Container sx={{ flexGrow: 1, pt: 2 }}>
        <Main />
      </Container>
      <Footer />
    </Box>
  );
}
