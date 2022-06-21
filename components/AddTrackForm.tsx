import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useInput } from '../hooks/useInput';
import styles from '../styles/AddTrackForm.module.scss';

const AddTrackForm: React.FC = () => {
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');

  return (
    <Grid container className={styles.form}>
      <TextField {...name} className={styles.formInput} label={'Название трека'} />
      <TextField {...artist} className={styles.formInput} label={'Имя автора'} />
      <TextField {...text} className={styles.formInput} label={'Текст песни'} multiline rows={3} />
    </Grid>
  );
};

export default AddTrackForm;
