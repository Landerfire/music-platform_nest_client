import { Button, Card, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import TrackList from '../../components/TrackList';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';
import { fetchTracks } from '../../store/action-creators/tracks';
import { NextThunkDispatch, wrapper } from '../../store/store';
import { ITrack } from '../../types/track';

const Track = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.tracks);

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

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

// @ts-ignore
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchTracks());
});