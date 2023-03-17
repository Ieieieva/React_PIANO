import "./App.scss";
import { notes } from "./utils/AllNotes";
import { Octave } from "./components/Octave/Octave";
import { handleKeyDown } from "./utils/handleKeyDown";
import { useState } from "react";
import { VolumeSlider } from "./components/VolumeSlider/VolumeSlider";

function App() {
  const [volume, setVolume] = useState(1);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

    const sound = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    sound.volume = volume;
    sound.play();
  };

  return (
    <div className="App">
      <h1 className="App__heading">
        Feel the music of a Piano
      </h1>
      <Octave
        notes={notes}
        clickHandler={handleClick}
        keyHandler={handleKeyDown}
      />
      <VolumeSlider 
        volume={volume} 
        setVolume={setVolume} 
      />
    </div>
  );
}

export default App;
