import { VolumeUp } from '@mui/icons-material';
import { Slider, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';
import { formatDurationTime } from '../helpers/formatDurationTime';

interface TrackProgressProps extends React.InputHTMLAttributes<HTMLInputElement> {
  left: number;
  right: number;
  onChange: (e) => void;
  type?: 'progress' | 'volume';
}

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.7,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const TrackProgressBar: React.FC<TrackProgressProps> = ({ left, right, onChange, type = 'progress' }) => {
  return (
    <>
      <Box
        sx={{
          px: type !== 'volume' && 2,
          mt: type !== 'volume' && 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {type === 'volume' && <VolumeUp sx={{ mr: 2 }} />}
        <Slider
          aria-label={type}
          value={left}
          min={0}
          max={right}
          step={1}
          onChange={onChange}
          valueLabelDisplay={type === 'volume' ? 'auto' : 'off'}
        />
      </Box>
      {type !== 'volume' && (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: -1 }}>
          <TinyText>{formatDurationTime(left)}</TinyText>
          <TinyText>{formatDurationTime(right)}</TinyText>
        </Box>
      )}

      {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: -1 }}>
        {type === 'progress' && (
          <>
            <TinyText>{formatDuration(left)}</TinyText>
            <TinyText>{formatDuration(right)}</TinyText>
          </>
        )}
        {type === 'volume' && (
          <>
            <TinyText>{left}</TinyText>
            <TinyText>{right}</TinyText>
          </>
        )}
      </Box> */}
    </>
  );
};

export default TrackProgressBar;
