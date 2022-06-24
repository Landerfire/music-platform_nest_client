import { Box, Button, Grid } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AddTrackForm from '../../components/AddTrackForm';
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import { useInput } from '../../hooks/useInput';
import MainLayout from '../../layouts/MainLayout';

const Create = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');

  const next = () => {
    if (activeStep < 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('picture', picture);
      formData.append('audio', audio);
      
      axios
        .post('http://localhost:5000/tracks', formData)
        .then((response) => router.push('/tracks'))
        .catch((error) => console.log(error));
    }
  };

  const back = () => {
    activeStep > 0 && setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout pageTitle="">
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && <AddTrackForm name={name} artist={artist} text={text} />}
        {activeStep === 1 && (
          <>
            <FileUpload setFile={setPicture} accept="image/*">
              <Button>Загрузить изображение</Button>
            </FileUpload>
          </>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/mp3">
            <Button>Загрузить аудио-файл</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent={'center'}>
        <Box sx={{ minWidth: '50vw', display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={back} disabled={activeStep === 0}>
            Назад
          </Button>
          <Button onClick={next}>Далее</Button>
        </Box>
      </Grid>
    </MainLayout>
  );
};

export default Create;
