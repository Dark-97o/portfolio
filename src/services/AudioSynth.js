/* 🎌 Web Audio API Cyber Synth Retro Sound System */

class CyberSynthSystem {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  initContext() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API is not supported in this browser environment:', e);
    }
  }

  playHoverSweep() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // Elegant high-tech hover sound: high-frequency logarithmic sweep (sine wave)
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1600, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.012, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.12);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) {}
  }

  playBeepClick() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // High-precision dual frequency beep (square wave) simulating high-end computer registry click
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'square';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      osc.frequency.setValueAtTime(700, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.025, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  }

  playBootDiagnostics() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // low periodic scan hum
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(240, this.ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.018, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.15);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch (e) {}
  }

  playToggleChime() {
    this.initContext();
    if (!this.ctx) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'triangle';
      const startPitch = this.enabled ? 350 : 700;
      const endPitch = this.enabled ? 700 : 350;

      osc.frequency.setValueAtTime(startPitch, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(endPitch, this.ctx.currentTime + 0.2);

      gain.gain.setValueAtTime(0.035, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.2);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch (e) {}
  }

  toggle() {
    this.enabled = !this.enabled;
    this.playToggleChime();
    return this.enabled;
  }
}

export const AudioSynth = new CyberSynthSystem();
