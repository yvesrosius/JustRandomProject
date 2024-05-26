import Slider from '@mui/material/Slider';

type OscillatorDetuneSliderType = {
    setOscillatorDetune: (value: number) => void;
}

export const OscillatorDetuneSlider = ({ setOscillatorDetune }: OscillatorDetuneSliderType) => {
    const minDetune = 1
    const maxDetune = 100
    const defaultFrequency = 1

    return (
        <div>
            <a>Detune</a>
            <Slider
                aria-label="Detune"
                defaultValue={defaultFrequency}
                valueLabelDisplay="auto"
                step={1}
                min={minDetune}
                max={maxDetune}
                onChange={(_event, value) => setOscillatorDetune(value as number)} />
        </div>
    );
};
