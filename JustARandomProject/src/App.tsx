import { useState, useEffect } from 'react'
import './App.css'
import { SequencerSpeedSlider } from './components/SequencerSpeedSlider'
import { SequencerButton } from './components/SequencerButton'
import { OscillatorFrequencySlider } from './components/OscillatorFrequencySlider'
import { WaveFormSelector } from './components/WaveFormSelector'
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel'
import Checkbox from '@mui/material/Checkbox/Checkbox'
import { BiquadfilterFrequencySlider } from './components/BiquadfilterFrequencySlider'
import { StepAmountSlider } from './components/StepAmountSlider'
import { OscillatorAmountSlider } from './components/OscillatorAmountSlider'
import { OscillatorDetuneSlider } from './components/OscillatorDetuneSlider'
import { DelayTimeSlider } from './components/DelayTimeSlider'
import { DelayAmountSlider } from './components/DelayAmountSlider'



function App() {

  const topRowNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const bottomRowNumbers = [9, 10, 11, 12, 13, 14, 15, 16]

  const [stepAmount, setStepAmount] = useState(16)
  const [isMuted, setIsMuted] = useState(true)
  const [selectedSequencerButtonNumber, setSelectedSequencerButtonNumber] = useState(1)
  const [intervalTime, setIntervalTime] = useState(100)

  const [oscillatorFrequency, setOscillatorFrequency] = useState(440)
  const [oscillatorAmount, setOscillatorAmount] = useState(1)
  const [oscillatorDetune, setOscillatorDetune] = useState(0)
  const [waveForm, setWaveForm] = useState('sine')

  const [biquadfilterFrequency, setBiquadfilterFrequency] = useState(200)

  const [delayTime, setDelayTime] = useState(0)
  const [delayAmount, setDelayAmount] = useState(0.4)

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSequencerButtonNumber((prevNumber) => (prevNumber < stepAmount ? prevNumber + 1 : 1));
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [selectedSequencerButtonNumber, intervalTime]);

  return (
    <>
      <div className='settingsWrapper'>
        <div>
          <h4>Sequencer settings</h4>
          <StepAmountSlider
            setStepAmount={setStepAmount}
          />
          <SequencerSpeedSlider
            setIntervalTime={setIntervalTime}
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                onChange={() => setIsMuted(!isMuted)}
              />
            }
            label="Mute triggers"
          />
        </div>
        <div>
          <h4>Synth settings</h4>
          <OscillatorFrequencySlider
            setOscillatorFrequency={setOscillatorFrequency}
          />
          <OscillatorAmountSlider
            setOscillatorAmount={setOscillatorAmount}
          />
          <OscillatorDetuneSlider
            setOscillatorDetune={setOscillatorDetune}
          />
          <WaveFormSelector
            setWaveForm={setWaveForm}
            waveForm={waveForm}
          />
        </div>
        <div>
          <h4>Filter settings</h4>
          <BiquadfilterFrequencySlider
            setBiquadfilterFrequency={setBiquadfilterFrequency}
          />
        </div>
        <div>
          <h4>Effects</h4>
          <DelayTimeSlider
            setDelayTime={setDelayTime}
          />
          <DelayAmountSlider 
            setDelayAmount={setDelayAmount}
          />
        </div>
      </div>

      <div className='wrapper'>
        {
          topRowNumbers.map(
            (number) =>
              <SequencerButton
                key={number}
                number={number}
                isMuted={isMuted}
                selectedSequencerButtonNumber={selectedSequencerButtonNumber}
                oscillatorFrequency={oscillatorFrequency}
                oscillatorAmount={oscillatorAmount}
                oscillatorDetune={oscillatorDetune}
                waveForm={waveForm}
                biquadfilterFrequency={biquadfilterFrequency}
                delayTime={delayTime}
                delayAmount={delayAmount}
              />
          )
        }
      </div>
      <div className='wrapper'>
        {
          bottomRowNumbers.map(
            (number) =>
              <SequencerButton
                key={number}
                number={number}
                isMuted={isMuted}
                selectedSequencerButtonNumber={selectedSequencerButtonNumber}
                oscillatorFrequency={oscillatorFrequency}
                oscillatorAmount={oscillatorAmount}
                oscillatorDetune={oscillatorDetune}
                waveForm={waveForm}
                biquadfilterFrequency={biquadfilterFrequency}
                delayTime={delayTime}
                delayAmount={delayAmount}
              />
          )
        }
      </div>
    </>
  )
}

export default App
