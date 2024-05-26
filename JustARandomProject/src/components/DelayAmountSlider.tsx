import Slider from '@mui/material/Slider/Slider';

export type DelayAmountSliderType = {
    setDelayAmount: (value: number) => void
}

export const DelayAmountSlider = ({ setDelayAmount }: DelayAmountSliderType) => {

    const minAmount = 0;
    const maxAmount = 1;
    const defaultAmount = 0.4;

    return (
        <div>
            <a>Delay amount</a>
            <Slider
                aria-label="Delay amount"
                valueLabelFormat={(value) => `${value * 100} %`}
                defaultValue={defaultAmount}
                valueLabelDisplay="auto"
                step={0.1}
                min={minAmount}
                max={maxAmount}
                onChange={(_event, value) => setDelayAmount(value as number)} />
        </div>
    );
};
