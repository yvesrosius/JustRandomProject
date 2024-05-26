import Slider from '@mui/material/Slider';

type BiquadfilterFrequencySliderType = {
    setBiquadfilterFrequency: (value: number) => void;
}

export const BiquadfilterFrequencySlider = ({ setBiquadfilterFrequency }: BiquadfilterFrequencySliderType) => {
    const minFrequency = 1
    const maxFrequency = 2000
    const defaultFrequency = 440

    return (
        <div>
            <a>Biquad filter frequency</a>
            <Slider
                aria-label="Biquad filter frequency"
                valueLabelFormat={(value) => `${value} Hz`}
                defaultValue={defaultFrequency}
                valueLabelDisplay="auto"
                step={1}
                min={minFrequency}
                max={maxFrequency}
                onChange={(_event, value) => setBiquadfilterFrequency(value as number)} />
        </div>
    );
};
