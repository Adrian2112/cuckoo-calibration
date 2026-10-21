# Cuckoo Clock Calibration

Calibrate a pendulum (cuckoo) clock using only a phone microphone — no optical sensor, no app install.

**→ Open the app: <https://adrian2112.github.io/cuckoo-calibration/>**

## The method in one paragraph

Every full pendulum swing is one tick. The app listens with the microphone, learns your clock's exact rate (beats per hour), and then — through a simple mechanical trick — figures out how many seconds per day the clock runs fast or slow without needing the clock to show the correct time: you tap the button as the first cuckoo call begins on a whole hour, and again at a whole-hour call the next day. Since both taps are the same mechanical event, only the elapsed real time between them matters. The result is the daily drift and a target beats-per-hour so you know exactly what setting to aim for.

## How to use it

1. **Measure the rhythm** — phone near the clock in a quiet room, tap "Start calibration". After ~24 steady ticks the rate is saved.
2. **Rough pre-adjust (optional)** — if the clock is *minutes per* day off, set the hands to the correct time, come back in about 2 hours, and enter how far the minute hand wandered. The app estimates minutes-per-day fast/slow (eyes-on precision), proposes a corrected beats-per-hour, and can verify the bob live against that target. *Raise the pendulum bob to speed the clock up, lower it to slow it down.*
3. **Mark the start** — tap "Cuckoo started" as the first call begins at a whole hour.
4. **Wait** — at least 6 hours, ideally a full day: a longer gap turns the same tap uncertainty into a smaller per-day error. Hands and pendulum stay untouched; the page can be closed.
5. **Finish the check** — at a whole hour's cuckoo call, tap again. You get seconds-per-day drift and the final target BPM.
6. **Adjust & verify** — nudge the bob, use "Check my adjustment" for a live comparison, then run one more 24-hour check to confirm.

**Notes:** the check refuses taps more than ~10 minutes from a whole-hour call (a half-hour cuckoo or a sloppy tap — your starting mark stays saved, just tap at the next hour). A clock more than ~10 minutes/day off must be rough-adjusted first. Beat = one full pendulum swing; a typical 0.5 s tick means 7200 beats/hour.

## Features

- Pure client-side single-page app — audio never leaves the device
- Auto-adapting tick detector (microphone level, quiet-room tolerant)
- Rough checker for badly-off clocks + live "am I close?" meter against a target BPM
- Progress saved on-device; works after the first visit even offline (installed via *Add to Home Screen*)
- Best precision ~4 s/day with a 24-hour check

## Hosting

Static site — `index.html`, `sw.js` (offline cache), `manifest.json` + `icon.svg` (installable PWA), served by GitHub Pages from `main`. After changing anything:

```bash
git add . && git commit -m "…" && git push
```
