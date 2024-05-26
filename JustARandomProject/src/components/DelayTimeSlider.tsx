import Slider from '@mui/material/Slider/Slider';

export type DelayTimeSliderType = {
    setDelayTime: (value: number) => void
}

export const DelayTimeSlider = ({ setDelayTime }: DelayTimeSliderType) => {

    const minSpeed = 0;
    const maxSpeed = 500;
    const defaultSpeed = 0;

    return (
        <div>
            <a>Delay time</a>
            <Slider
                aria-label="Delay time"
                valueLabelFormat={(value) => `${value} ms`}
                defaultValue={defaultSpeed}
                valueLabelDisplay="auto"
                step={1}
                min={minSpeed}
                max={maxSpeed}
                onChange={(_event, value) => setDelayTime((value as number))} />
        </div>
    );
};
