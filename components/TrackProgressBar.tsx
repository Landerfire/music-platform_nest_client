import { VolumeUp } from '@mui/icons-material';
import { Slider, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e) => void;
  type?: 'progress' | 'volume';
}

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.4,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const TrackProgressBar: React.FC<TrackProgressProps> = ({ left, right, onChange, type = 'progress' }) => {
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }

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
        <Slider aria-label={type} value={left} min={left} max={right} step={1} onChange={onChange} />
      </Box>
      {type !== 'volume' && (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: -1 }}>
          <TinyText>{formatDuration(left)}</TinyText>
          <TinyText>{formatDuration(right)}</TinyText>
        </Box>
      )}
    </>
  );
};

export default TrackProgressBar;
