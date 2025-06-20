import React from "react";
import { Sparkles } from "lucide-react";
import "./AIGenButton.css";

const AIGenButton = ({ isDarkMode, onStartGenerating }) => {
  const handleClick = () => {
    if (onStartGenerating) onStartGenerating();
  };

  return (
    <div className='ai-gen-button-wrapper'>
      {/* Gradient for SVG icon */}
      <svg width='0' height='0'>
        <defs>
          <linearGradient
            id='sparkle-gradient'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'
          >
            <stop stopColor='#cb54ff' offset='0%' />
            <stop stopColor='#ff54c1' offset='100%' />
          </linearGradient>
        </defs>
      </svg>

      <button
        onClick={handleClick}
        className={`ai-gen-button ${isDarkMode ? "btn-dark" : "btn-light"}`}
        aria-live='polite'
      >
        <Sparkles
          size={16}
          style={{
            stroke: "url(#sparkle-gradient)",
          }}
        />
        Generate Summary with AI
      </button>
    </div>
  );
};

export default AIGenButton;
