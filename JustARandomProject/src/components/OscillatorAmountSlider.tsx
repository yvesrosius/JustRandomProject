import Slider from '@mui/material/Slider';

type OscillatorAmountSliderType = {
    setOscillatorAmount: (value: number) => void;
}

export const OscillatorAmountSlider = ({ setOscillatorAmount }: OscillatorAmountSliderType) => {
    const minOscillators = 1
    const maxOscillators = 4
    const defaultAmount = 1

    return (
        <div>
            <a>Oscillators</a>
            <Slider
                aria-label="Oscillators"
                defaultValue={defaultAmount}
                valueLabelDisplay="auto"
                step={1}
                min={minOscillators}
                max={maxOscillators}
                onChange={(_event, value) => setOscillatorAmount(value as number)} />
        </div>
    );
};
