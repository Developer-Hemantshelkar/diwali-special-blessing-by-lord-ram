/**
 * Native Web Audio API synthesizer for meditative Ramayana ambiance.
 * Synthesizes a soothing tanpura drone, ambient bansuri pentatonic harmonics,
 * and sacred temple bell resonances with zero external network audio files.
 */

class RamayanaAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private droneOscs: OscillatorNode[] = [];
  private droneGains: GainNode[] = [];
  private melodyInterval: NodeJS.Timeout | null = null;
  private volume: number = 0.45;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      // Stop previous if running
      this.stopDrone();

      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.linearRampToValueAtTime(this.volume, now + 3);

      // 1. Tanpura Drone: Root (C#3 ~ 138.59Hz OM frequency) + 5th (G#3 ~ 207.65Hz) + octave (C#4 ~ 277.18Hz)
      const baseFreq = 138.59;
      const droneNotes = [
        { f: baseFreq * 0.5, type: "triangle" as OscillatorType, gain: 0.18, pan: 0 },
        { f: baseFreq, type: "sine" as OscillatorType, gain: 0.15, pan: -0.2 },
        { f: baseFreq * 1.002, type: "sawtooth" as OscillatorType, gain: 0.04, pan: 0.2 }, // shimmer
        { f: baseFreq * 1.5, type: "sine" as OscillatorType, gain: 0.12, pan: 0.3 }, // Pa (5th)
        { f: baseFreq * 2, type: "sine" as OscillatorType, gain: 0.08, pan: -0.3 }, // Tar Sa
      ];

      // Master lowpass filter to create warm temple acoustic
      const warmFilter = this.ctx.createBiquadFilter();
      warmFilter.type = "lowpass";
      warmFilter.frequency.setValueAtTime(650, now);
      warmFilter.Q.setValueAtTime(2.0, now);
      warmFilter.connect(this.masterGain);

      this.droneOscs = [];
      this.droneGains = [];

      droneNotes.forEach((d) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = d.type;
        osc.frequency.setValueAtTime(d.f, now);

        g.gain.setValueAtTime(0.001, now);
        g.gain.linearRampToValueAtTime(d.gain, now + 4);

        osc.connect(g);
        g.connect(warmFilter);
        osc.start(now);

        this.droneOscs.push(osc);
        this.droneGains.push(g);
      });

      // 2. Meditative Ambient Flute / Singing Resonance Generator (Raag Bhupali: Sa, Re, Ga, Pa, Dha)
      // Notes based on baseFreq: 1, 9/8, 5/4, 3/2, 5/3, 2
      const scaleRatios = [1, 1.125, 1.25, 1.5, 1.666, 2, 2.25, 2.5];
      let noteIndex = 0;

      const playBansuriNote = () => {
        if (!this.isPlaying || !this.ctx || !this.masterGain) return;
        const noteTime = this.ctx.currentTime;
        const ratio = scaleRatios[noteIndex % scaleRatios.length];
        const freq = baseFreq * 2 * ratio;
        noteIndex = (noteIndex + Math.floor(Math.random() * 3) + 1) % scaleRatios.length;

        const noteOsc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();
        const noteFilter = this.ctx.createBiquadFilter();

        noteOsc.type = "sine";
        noteOsc.frequency.setValueAtTime(freq, noteTime);

        // Subtle vibrato
        const vibrato = this.ctx.createOscillator();
        const vibratoGain = this.ctx.createGain();
        vibrato.frequency.setValueAtTime(4.8, noteTime);
        vibratoGain.gain.setValueAtTime(3.5, noteTime);
        vibrato.connect(noteOsc.frequency);
        vibrato.start(noteTime);

        noteFilter.type = "bandpass";
        noteFilter.frequency.setValueAtTime(freq * 1.5, noteTime);
        noteFilter.Q.setValueAtTime(4, noteTime);

        const duration = 4.5 + Math.random() * 2;
        noteGain.gain.setValueAtTime(0.001, noteTime);
        noteGain.gain.linearRampToValueAtTime(0.09, noteTime + 1.2);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + duration);

        noteOsc.connect(noteGain);
        noteGain.connect(this.masterGain);

        noteOsc.start(noteTime);
        noteOsc.stop(noteTime + duration);
        vibrato.stop(noteTime + duration);
      };

      // Play periodically every 5-8 seconds
      this.melodyInterval = setInterval(() => {
        playBansuriNote();
      }, 5500);

      // Play initial opening note
      setTimeout(() => {
        playBansuriNote();
      }, 1200);

      this.isPlaying = true;
    } catch (e) {
      console.warn("Audio Context could not start automatically:", e);
    }
  }

  public stop() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.linearRampToValueAtTime(0.001, now + 1.5);
    setTimeout(() => {
      this.stopDrone();
      this.isPlaying = false;
    }, 1500);
  }

  private stopDrone() {
    if (this.melodyInterval) {
      clearInterval(this.melodyInterval);
      this.melodyInterval = null;
    }
    this.droneOscs.forEach((o) => {
      try {
        o.stop();
        o.disconnect();
      } catch {}
    });
    this.droneOscs = [];
    this.droneGains = [];
  }

  public setVol(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  /**
   * Sacred Tibetan/Temple Bell Chime for Blessing and Life Lesson reveals
   */
  public playTempleBell() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;

      // Temple bell harmonic overtones (fundamental ~ 587Hz D5)
      const freqs = [587.33, 1174.66, 1762.0, 2349.32];
      const decays = [4.5, 3.2, 2.1, 1.2];
      const gains = [0.25, 0.12, 0.08, 0.04];

      freqs.forEach((f, i) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(f, now);

        g.gain.setValueAtTime(gains[i], now);
        g.gain.exponentialRampToValueAtTime(0.0001, now + decays[i]);

        osc.connect(g);
        g.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + decays[i]);
      });
    } catch {}
  }

  /**
   * Resonant Om / Shankh (Conch shell) sacred sound invocation
   */
  public playSacredOm() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(136.1, now); // Sacred Om frequency
      osc.frequency.linearRampToValueAtTime(138.5, now + 3);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(220, now);
      filter.frequency.linearRampToValueAtTime(450, now + 1.5);
      filter.frequency.linearRampToValueAtTime(180, now + 4);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 4.5);
    } catch {}
  }
}

export const audioEngine = new RamayanaAudioEngine();
