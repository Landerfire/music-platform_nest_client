import { Box, Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useInput } from '../../hooks/useInput';
import MainLayout from '../../layouts/MainLayout';
import { IComment, ITrack } from '../../types/track';

interface TrackPageProps {
  serverTrack: ITrack;
  serverComments: IComment[];
}

const TrackPage = ({ serverTrack, serverComments }: TrackPageProps) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const [comments, setComments] = useState(serverComments);
  const router = useRouter();
  const commentUsername = useInput('');
  const commentText = useInput('');

  const addComment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/tracks/comment', {
        username: commentUsername.value,
        text: commentText.value,
        track_id: track.id,
      });
      setComments([...track.comments, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <Box sx={{ px: '20px' }}>
        <Button onClick={() => router.push('/tracks')} variant={'outlined'} sx={{ fontSize: 32 }}>
          К списку
        </Button>
        <Grid container my={'20px'}>
          <Image
            src={'http://localhost:5000/' + track.picture}
            width={200}
            height={200}
            alt="Изображение обложки трека"
          />
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
          <TextField label={'Ваше имя'} {...commentUsername} fullWidth />
          <TextField label={'Комментарий'} {...commentText} fullWidth multiline rows={4} />
          <Button onClick={addComment}>Отправить</Button>
        </Grid>
        <div>
          {comments.map((comment) => (
            <Box key={comment.id}>
              <p>{comment.username}</p>
              <div>{comment.text}</div>
            </Box>
          ))}
        </div>
      </Box>
    </MainLayout>
  );
};

export default TrackPage;

interface serverSideProps {
  props: { serverTrack: ITrack; serverComments: IComment[] };
}

export const getServerSideProps: GetServerSideProps = async ({ params }): Promise<serverSideProps> => {
  // const response = await axios.get('http://localhost:5000/tracks/' + params.id);
  const response = await axios.get(`http://localhost:5000/tracks/${params.id}?comments`);

  return {
    props: {
      serverTrack: response.data.track,
      serverComments: response.data.comments,
    },
  };
};
