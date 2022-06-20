import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Player from '../components/Player';

export const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  paddingTop: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface MainLayoutProps {
  children?: React.ReactNode;
  navbarTitle?: string;
  pageTitle?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, navbarTitle = 'Music Platform', pageTitle = '' }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <================== head ==================> */}
      <Head>
        <title>{pageTitle === '' ? navbarTitle : pageTitle}</title>
      </Head>
      {/* <==================================================> */}
      <Box sx={{ display: 'flex' }}>
        <Navbar
          open={open}
          theme={theme}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          pageTitle={pageTitle}
          navbarTitle={navbarTitle}
        />
        <Main open={open} style={{ marginTop: '80px' }}>
          {children}
        </Main>
        <Player />
      </Box>
    </>
  );
};

export default MainLayout;
