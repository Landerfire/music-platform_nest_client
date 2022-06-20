import { Box, Button, Grid, TextField } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import AddTrackForm from '../../components/AddTrackForm';
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import MainLayout from '../../layouts/MainLayout';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const next = () => {
    activeStep < 2 && setActiveStep((prev) => prev + 1);
  };
  const back = () => {
    activeStep > 0 && setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout pageTitle="">
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && <AddTrackForm />}
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
