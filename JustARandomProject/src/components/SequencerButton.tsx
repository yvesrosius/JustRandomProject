import { useState } from 'react';
import { playSound } from '../playsound';

export type SequencerButtonType = {
    number: number
    selectedSequencerButtonNumber: number
    oscillatorFrequency: number
    oscillatorAmount: number
    oscillatorDetune: number
    waveForm: string
    biquadfilterFrequency: number
    isMuted: boolean
    delayTime: number
    delayAmount: number
}

export const SequencerButton = ({ number, selectedSequencerButtonNumber, oscillatorFrequency, oscillatorAmount, oscillatorDetune, waveForm, biquadfilterFrequency, isMuted, delayTime, delayAmount }: SequencerButtonType) => {

    let isCurrentlySequenced = (number === selectedSequencerButtonNumber);
    const [isSelectedState, setIsSelectedState] = useState(false);
    let divClassName = isSelectedState ? "normal isSelected" : "normal";
    if (isCurrentlySequenced) {
        divClassName += " isCurrentlySequenced";
    }

    if (isCurrentlySequenced && isSelectedState && !isMuted) {
        playSound(oscillatorFrequency, oscillatorAmount, oscillatorDetune, waveForm as any, 0.2, biquadfilterFrequency, delayTime, delayAmount);
    }

    return (
        <div
            key={number}
            className={divClassName}
            onClick={() => setIsSelectedState(!isSelectedState)}
        >
            <a>
                {number}
            </a>
        </div>
    );
};
