import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';

import { NavButton } from './SharedHeader.styled';

export default function SharedHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar variant="regular">
            <Typography variant="logo" component="div" sx={{ flexGrow: 1 }}>
              New Post
            </Typography>
            <ButtonGroup
              color="inherit"
              variant="text"
              aria-label="text button group"
            >
              <Button component={NavButton} to="/tracking">
                Відстежити
              </Button>
              <Button component={NavButton} to="/offices">
                Відділення
              </Button>
            </ButtonGroup>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  );
}

