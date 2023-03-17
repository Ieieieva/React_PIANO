import React from "react";
import { NoteType } from "../../utils/AllNotes";
import { Note } from "../Note/Note";
import "./Octave.scss";

type OctaveProps = {
  notes: NoteType[];
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  keyHandler: (e: React.KeyboardEvent) => void;
};

export const Octave: React.FC<OctaveProps> = ({
  notes,
  clickHandler,
  keyHandler,
}) => (
  <div className="keyboard__wrapper">
    <div className="keyboard">
      <img
        className="keyboard__brand"
        src="https://www.daynesmusic.com/wp-content/uploads/2016/10/Steinway_logo5_525x162.png"
      />
      <div>
        {notes.map((note: NoteType) => (
          <Note
            key={note.note}
            color={note.color}
            note={note.note}
            clickHandler={clickHandler}
            keyHandler={keyHandler}
            className={""}
          />
        ))}
      </div>
    </div>
  </div>
);
