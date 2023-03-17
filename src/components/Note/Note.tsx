import React from "react";
import "./Note.scss";

type NoteProps = {
  color: string;
  note: string;
  className: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  keyHandler: (e: React.KeyboardEvent) => void;
};

export const Note: React.FC<NoteProps> = ({
  color,
  note,
  clickHandler,
  keyHandler,
}) =>
  color === "white" ? (
    <button
      className="note__white"
      value={note}
      onClick={clickHandler}
      onKeyDown={keyHandler}
    />
  ) : (
    <button
      value={note}
      className="note__black"
      onClick={clickHandler}
      onKeyDown={keyHandler}
    />
  );
