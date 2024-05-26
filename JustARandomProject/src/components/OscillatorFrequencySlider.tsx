import Slider from '@mui/material/Slider/Slider';

export type OscillatorFrequencySliderType = {
    setOscillatorFrequency: (value: number) => void
  }

export const OscillatorFrequencySlider = ({ setOscillatorFrequency }: OscillatorFrequencySliderType) => {

    const minFrequency = 20
    const maxFrequency = 2000
    const defaultFrequency = 440

    return (
        <div>
            <a>Oscillator frequency</a>
            <Slider
                aria-label="Oscillator frequency"
                valueLabelFormat={(value) => `${value} Hz`}
                defaultValue={defaultFrequency}
                valueLabelDisplay="auto"
                step={10}
                min={minFrequency}
                max={maxFrequency}
                onChange={(_event, value) => setOscillatorFrequency(value as number)} />
        </div>
    )
}
