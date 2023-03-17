interface AudioKeys {
  [key: string]: string;
}

export const handleKeyDown = (event: React.KeyboardEvent) => {
  const audioKeys: AudioKeys = {
    z: "sounds/piano_DO.mp3",
    s: "sounds/piano_DO_diez.mp3",
    x: "sounds/piano_RE.mp3",
    d: "sounds/piano_RE_diez.mp3",
    c: "sounds/piano_MI.mp3",
    v: "sounds/piano_FA.mp3",
    g: "sounds/piano_FA_diez.mp3",
    b: "sounds/piano_SOL.mp3",
    h: "sounds/piano_SOL_diez.mp3",
    n: "sounds/piano_LA.mp3",
    j: "sounds/piano_LA_diez.mp3",
    m: "sounds/piano_SI.mp3",
  };

  const audio = audioKeys[event.key];
  if (audio) {
    const sound = new Audio(audio);
    sound.play();
  }
};
