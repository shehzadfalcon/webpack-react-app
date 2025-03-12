import React from "react";

export default function DiceRoll() {
  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
  };

  const [num, setNum] = React.useState(getRandomNumber());
  const [isRolling, setIsRolling] = React.useState(false);

  const handleClick = () => {
    setIsRolling(true);
    
    // Add animation effect with timeout
    setTimeout(() => {
      const newNum = getRandomNumber();
      setNum(newNum);
      setIsRolling(false);
    }, 600);
  };

  return (
    <div className="dice-container">
      <h2 className="dice-title">Roll the Dice</h2>
      
      <div className="dice-result">
        <div className={`dice-face ${isRolling ? 'rolling' : ''}`}>
          {isRolling ? '?' : num}
        </div>
      </div>
      
      <button 
        className="roll-button" 
        onClick={handleClick}
        disabled={isRolling}
      >
        {isRolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  );
}