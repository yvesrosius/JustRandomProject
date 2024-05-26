import Slider from '@mui/material/Slider/Slider';

export type SequencerSpeedSliderType = {
    setIntervalTime: (value: number) => void
}

export const SequencerSpeedSlider = ({ setIntervalTime }: SequencerSpeedSliderType) => {

    const minSpeed = 0;
    const maxSpeed = 500;
    const defaultSpeed = 100;

    return (
        <div>
            <a>Sequencer speed</a>
            <Slider
                aria-label="Sequencer speed"
                valueLabelFormat={(value) => `${Math.round(60000 / 4 / value)} bpm`}
                defaultValue={maxSpeed - defaultSpeed}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={10}
                min={minSpeed}
                max={maxSpeed - 10}
                scale={(x) => maxSpeed - x}
                onChange={(_event, value) => setIntervalTime(maxSpeed - (value as number))} />
        </div>
    );
};
