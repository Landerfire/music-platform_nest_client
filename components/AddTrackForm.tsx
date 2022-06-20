import { Grid, TextField } from '@mui/material';
import React from 'react';
import styles from '../styles/AddTrackForm.module.scss';

const AddTrackForm: React.FC = () => {
  return (
    <Grid container className={styles.form}>
      <TextField className={styles.formInput} label={'Навзание трека'} />
      <TextField className={styles.formInput} label={'Имя автора'} />
      <TextField className={styles.formInput} label={'Текст песни'} multiline rows={3} />
    </Grid>
  );
};

export default AddTrackForm;
