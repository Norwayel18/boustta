import React from "react";
import { useState } from "react";
import Show from "./Show";

const Partie_2 = () => {
  const JsonArray = [
    {
      nom: "ahmed",
      prenom: "sadiq",
      age: "18",
      filiere: "DD",
    },
    {
      nom: "rachid",
      prenom: "zrwali",
      age: "19",
      filiere: "ID",
    },
    {
      nom: "mehdi",
      prenom: "charaf",
      age: "21",
      filiere: "DD",
    },
    {
      nom: "marwan",
      prenom: "tala",
      age: "20",
      filiere: "ID",
    },
  ]; //Q1

  const [take_input, setInput] = useState("");
  const [S_stg, setS_stg] = useState([]);
  const handleClickSearch = () => {
    setS_stg(JsonArray.filter((fl) => fl.filiere == take_input));
    setInput("");
  };
  return (
    <>
      <h1>
        <li></li>
      </h1>
      {
        /*Q1 */
        <fieldset>
          <legend>
            <h1>Q2 :</h1>
          </legend>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={take_input}
          />
          <button onClick={handleClickSearch}>Search</button>

          <Show stg={S_stg} />
        </fieldset>
      }
    </>
  );
};

export default Partie_2;
