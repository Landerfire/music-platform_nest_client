import { Box, Button, Grid, TextField } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const TrackPage = () => {
  const track: ITrack = {
    id: '1',
    name: 'Трек 1',
    artist: 'Исполнитель 1',
    text: 'Какой-то текст',
    listens: 0,
    audio: 'http://localhost:5000/audio/3245b18e-1262-47eb-940d-596b55017651.mp3',
    picture: 'http://localhost:5000/image/88ab34c1-6475-4712-8d2d-f02d8259632a.jpg',
    comments: [],
  };
  const router = useRouter();

  return (
    <MainLayout>
      <Box sx={{ px: '20px' }}>
        <Button onClick={() => router.push('/tracks')} variant={'outlined'} sx={{ fontSize: 32 }}>
          К списку
        </Button>
        <Grid container my={'20px'}>
          <Image src={track.picture} width={200} height={200} alt="Изображение обложки трека" />
          <Box sx={{ marginLeft: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <h2>{track.name}</h2>
            <h3>{track.artist}</h3>
            <h4>Прослушано: {track.listens}</h4>
          </Box>
        </Grid>
        <h2>Текст песни</h2>
        <p>{track.text}</p>
        <h1>Комментарии</h1>
        <Grid container>
          <TextField label={'Ваше имя'} fullWidth />
          <TextField label={'Комментарий'} fullWidth multiline rows={4} />
          <Button>Отправить</Button>
        </Grid>
        <div>
          {track.comments.map((comment) => (
            <div key={comment.id}>
              <div>{comment.username}</div>
              <div>{comment.text}</div>
            </div>
          ))}
        </div>
      </Box>
    </MainLayout>
  );
};

export default TrackPage;
