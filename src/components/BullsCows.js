import React, { useState } from "react";
import "../bullscows.css";
const generateSecretCode = () => {
  let digits = new Set();
  while (digits.size < 4) {
    digits.add(Math.floor(Math.random() * 10));
  }
  return Array.from(digits).join("");
};

const calculateBullsAndCows = (guess, secret) => {
  let bulls = 0,
    cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }
  return { bulls, cows };
};

const BullsCows = () => {
  const [secretCode, setSecretCode] = useState(generateSecretCode());
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 4 || new Set(guess).size !== 4) {
      alert("Digite um número de 4 dígitos distintos.");
      return;
    }

    const result = calculateBullsAndCows(guess, secretCode);
    setAttempts([{ guess, ...result }, ...attempts]);
    setGuess("");
  };

  return (
    <div className="bulls-cows-container">
      <h2>Bulls and Cows</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={4}
          pattern="\d{4}"
          placeholder="Enter 4 unique digits"
        />
        <button type="submit" className="button">
          Guess
        </button>
      </form>
      <button onClick={() => alert(`Secret Code: ${secretCode}`)}>
        Reveal Secret
      </button>
      <h3>Attempts:</h3>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>
            {attempt.guess} - Bulls: {attempt.bulls}, Cows: {attempt.cows}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BullsCows;
