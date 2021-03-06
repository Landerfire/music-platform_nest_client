import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

interface StepWrapperProps {
  activeStep: number;
  children?: React.ReactNode;
}

const steps = ['Информация о треке', 'Выберите обложку', 'Выберите трек для загрузки'];

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent={'center'} sx={{ margin: '70px 0', height: 270 }}>
        <Card sx={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
