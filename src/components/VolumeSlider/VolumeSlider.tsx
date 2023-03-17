import "./VolumeSlider.scss";

interface VolumeSliderProps {
  volume: number;
  setVolume: (value: number) => void;
}

export const VolumeSlider = ({ volume, setVolume }: VolumeSliderProps) => {
  return (
    <div className="slider">
      <label className="slider__label">Volume</label>
      <input
        className="slider__input"
        type="range"
        min={0}
        max={1}
        value={volume}
        step="any"
        onChange={(e) => {
          setVolume(+e.target.value);
        }}
      />
    </div>
  );
};
