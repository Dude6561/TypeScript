import React, { useState } from "react";

type AppProps = {
  hello: string;
};

export default function App(props: AppProps) {
  const [edit, setEdit] = useState<number>(0);
  const [texts, setTexts] = useState<string>("");
  function Add() {
    setEdit(edit + 1);
  }

  function handlesubmit(event: React.ChangeEvent<HTMLInputElement>) {
    setTexts(event.target.value);
  }
  return (
    <div>
      {props.hello}
      {edit}
      <button onClick={Add}>click me </button>
      <br />
      <input type="text" onChange={handlesubmit} />
      <br />
      <p>{texts}</p>
    </div>
  );
}
