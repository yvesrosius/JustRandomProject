import Slider from '@mui/material/Slider';

type StepAmountSliderType = {
    setStepAmount: (value: number) => void;
}

export const StepAmountSlider = ({ setStepAmount }: StepAmountSliderType) => {
    const minSteps = 1
    const maxSteps = 16
    const defaultFrequency = 16

    return (
        <div>
            <a>Step amount</a>
            <Slider
                aria-label="Step amount"
                defaultValue={defaultFrequency}
                valueLabelDisplay="auto"
                step={1}
                min={minSteps}
                max={maxSteps}
                onChange={(_event, value) => setStepAmount(value as number)} />
        </div>
    );
};
