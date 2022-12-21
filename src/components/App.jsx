import React, { useState } from "react";
import text from "../data";
import Paragraph from "./Paragraph";

const App = () => {
  const [texts, setTexts] = useState([]);
  const [inputNum, setInputNum] = useState(1);
  const [err, setErr] = useState(null);

  const handleChange = (e) => setInputNum(e.target.value);
  const handleClick = () => {
    if (inputNum > 0 && inputNum < 10) {
      const filteredText = text.filter((e, i) => i < inputNum);
      setTexts(filteredText);
    } else {
      setErr(
        "Invalid number of paragraph. The number of paragraph is limited between 1-9."
      );
      setTexts([]);
    }
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1 className="title">TIRED OF BORING LOREM IPSUM?</h1>
        <label htmlFor="input" className="label">
          Paragraph(s):
        </label>
        <input
          className="input"
          type="number"
          min="1"
          max="9"
          id="input"
          value={inputNum}
          onChange={handleChange}
        />
        <button onClick={handleClick} className="btn">
          GENERATE
        </button>
        {texts.length !== 0 ? (
          texts.map((e, i) => (
            <Paragraph key={i} text={e} className="success-p" />
          ))
        ) : (
          <Paragraph text={err} className="err-p" />
        )}
      </div>
    </div>
  );
};

export default App;
