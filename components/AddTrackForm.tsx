import { Grid, TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';
import styles from '../styles/AddTrackForm.module.scss';

interface AddTrackFormProps {
  name: { value: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void };
  artist: { value: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void };
  text: { value: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void };
}

const AddTrackForm: React.FC<AddTrackFormProps> = ({ name, artist, text }) => {
  return (
    <Grid container className={styles.form}>
      <TextField {...name} className={styles.formInput} label={'Название трека'} />
      <TextField {...artist} className={styles.formInput} label={'Имя автора'} />
      <TextField {...text} className={styles.formInput} label={'Текст песни'} multiline rows={3} />
    </Grid>
  );
};

export default AddTrackForm;
