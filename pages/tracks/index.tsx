import { Button, Card, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import TrackList from '../../components/TrackList';
import { useActions } from '../../hooks/useAction';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const Track = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: '1',
      name: 'Трек 1',
      artist: 'Исполнитель 1',
      text: 'Какой-то текст',
      listens: 0,
      audio: 'http://localhost:5000/audio/3245b18e-1262-47eb-940d-596b55017651.mp3',
      picture: 'http://localhost:5000/image/88ab34c1-6475-4712-8d2d-f02d8259632a.jpg',
      comments: [],
    },
    {
      _id: '2',
      name: 'Трек 2',
      artist: 'Исполнитель 2',
      text: 'Какой-то текст',
      listens: 5,
      audio: 'http://localhost:5000/audio/0d60783d-c724-4226-bfc7-3a886992a404.mp3',
      picture: 'http://localhost:5000/image/41881974-e2d0-4f04-85d5-caf57d3b96b7.jpg',
      comments: [],
    },
    {
      _id: '3',
      name: 'Трек 3',
      artist: 'Исполнитель 3',
      text: 'Какой-то текст',
      listens: 15,
      audio: 'http://localhost:5000/audio/106a9ad9-22c0-4d1e-8d3f-3983e4c2b684.mp3',
      picture: 'http://localhost:5000/image/31a3939d-74c7-4d0c-bee0-b0bdd32dd5c2.jpg',
      comments: [],
    },
  ];

  return (
    <MainLayout pageTitle="Список треков">
      <Grid container justifyContent={'center'}>
        <Card style={{ width: '80vw' }}>
          <Box p={2}>
            <Grid container justifyContent={'space-between'}>
              <h1 style={{ margin: 0 }}>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Track;
