import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

type WaveFormSelectorType = {
  setWaveForm: (value: string) => void
  waveForm: string
}

export function WaveFormSelector({setWaveForm, waveForm}: WaveFormSelectorType) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWaveForm((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={waveForm}
        onChange={handleChange}
      >
        <FormControlLabel value="sine" control={<Radio />} label="Sine" />
        <FormControlLabel value="square" control={<Radio />} label="Square" />
        <FormControlLabel value="triangle" control={<Radio />} label="Triangle" />
        <FormControlLabel value="sawtooth" control={<Radio />} label="Sawtooth" />
      </RadioGroup>
    </>
  );
}