let AudioContext = window.AudioContext 
const context = new AudioContext()

export function playSound (frequency: number, oscillatorAmount: number, oscillatorDetune: number, type: OscillatorNode["type"], duration: number, biquadfilterFrequency: number, delayTime: number, delayAmount: number): void {

    const oscillator = new OscillatorNode(context, { type: type, frequency: frequency })
    const oscillator2 = new OscillatorNode(context, { type: type, frequency: frequency })
    const oscillator3 = new OscillatorNode(context, { type: type, frequency: frequency })
    const oscillator4 = new OscillatorNode(context, { type: type, frequency: frequency })
    const gain = new GainNode(context)
    const delay = new DelayNode(context, { delayTime: delayTime / 1000 })
    const delayGain = new GainNode(context, { gain: delayAmount })
    const biquadFilter = new BiquadFilterNode(context, { type: "lowpass", frequency: biquadfilterFrequency, gain: 75 })

    const now = context.currentTime

    gain.gain.setValueAtTime(1, now)
    gain.gain.exponentialRampToValueAtTime(2, now + duration)

    oscillator.detune.setValueAtTime(oscillatorDetune, now)
    oscillator2.detune.setValueAtTime(oscillatorDetune * -1, now)
    oscillator3.detune.setValueAtTime(oscillatorDetune * 2, now)
    oscillator4.detune.setValueAtTime(oscillatorDetune * -2, now)

    oscillator.connect(biquadFilter)
    oscillator2.connect(biquadFilter)
    oscillator3.connect(biquadFilter)
    oscillator4.connect(biquadFilter)

    oscillator.connect(delay)
    oscillator2.connect(delay)
    oscillator3.connect(delay)
    oscillator4.connect(delay)

    delay.connect(delayGain)

    delayGain.connect(biquadFilter)
    delayGain.connect(delay)

    biquadFilter.connect(gain)
    gain.connect(context.destination)

    oscillator.start(now)
    oscillator.stop(now + duration)

    if (oscillatorAmount > 1) {
        oscillator2.start(now)
        oscillator2.stop(now + duration)
    }
    if (oscillatorAmount > 2) {
        oscillator3.start(now)
        oscillator3.stop(now + duration)
    }
    if (oscillatorAmount > 3) {
        oscillator4.start(now)
        oscillator4.stop(now + duration)
    }

}