---
title: TEN VAD
description: Low-latency, high-performance Voice Activity Detector for real-time speech detection
---

```python
import numpy as np
from ten_vad import TenVad

def generate_test_signals(hop_size=256, sample_rate=16000):
    # A. Pure Silence (All zeros)
    silence = np.zeros(hop_size, dtype=np.int16)
    
    # B. Mock "Speech" (A 440Hz Sine Wave)
    # Human speech is complex, but a tone will trigger high energy/probability
    t = np.arange(hop_size) / sample_rate
    # Amplitude 10000 ensures it is audible in 16-bit range (-32768 to 32767)
    sine_wave = (10000 * np.sin(2 * np.pi * 440 * t)).astype(np.int16)
    
    # C. White Noise (Simulating background office noise)
    noise = np.random.randint(-1000, 1000, hop_size, dtype=np.int16)
    
    return silence, sine_wave, noise

# Test the synthesizer
vad = TenVad(hop_size=256)
silence, speech, noise = generate_test_signals()

_, flag_silence = vad.process(silence) # Should be 0
_, flag_speech = vad.process(speech)   # Should be 1
_, flag_noise = vad.process(noise)     # Should be 1
```
