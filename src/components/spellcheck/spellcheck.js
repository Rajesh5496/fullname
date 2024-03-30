import React from "react";
import { useState } from "react";

function Spellcheck(){

    const customDictionary = {
        teh: "the",
        wrok: "work",
        fot: "for",
        exampl: "example",
      };

    const [inputText, setInputText] = useState('')
    const [suggestedText, setSuggestedText] = useState('')

    const handleInputChange = (e) => {
        const text = e.target.value;
        // this.setState({ inputText: text });
        setInputText(text)

        const words = text.split(" ");
        const correctedWords = words.map((word) => {
          const correctedWord = customDictionary[word.toLowerCase()];
          return correctedWord || word;
        });
    
        const correctedText = correctedWords.join(" ");
    
        // Set the suggested text (first corrected word)
        const firstCorrection = correctedWords.find(
          (word, index) => word !== words[index]
        );
        // this.setState({ suggestedText: firstCorrection || "" });
        setSuggestedText(firstCorrection || "")
    }
    return (
        <div>
          <h1>Spell Check and Auto-Correction</h1>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter text..."
            rows={5}
            cols={40}
          />
          {suggestedText && (
            <p>
              Did you mean: <strong>{suggestedText}</strong>?
            </p>
          )}
        </div>
      );
}
export default Spellcheck