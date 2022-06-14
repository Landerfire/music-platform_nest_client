import { Button, Card, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import NavbarLayout from '../../layouts/NavbarLayout';

const Track = () => {
  const router = useRouter();

  return (
    <NavbarLayout pageTitle="Треки">
      <Grid container justifyContent={'center'}>
        <Card style={{ width: '80vw' }}>
          <Box p={2}>
            <Grid container justifyContent={'space-between'}>
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </NavbarLayout>
  );
};

export default Track;
