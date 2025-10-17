import React, { useState, useEffect } from "react";

export function TypingEffect({ 
  text = "Typing Effect", 
  speed = 100, // Time per letter in milliseconds
  delay = 2000 // Pause before restarting the typing
}) {

  const [displayedText, setDisplayedText] = useState(""); // Currently visible text
  const [index, setIndex] = useState(0); // Current position in the string

  useEffect(() => {
    if (index < text.length) {
      // Typing: add next character after `speed` ms
      const timeout = setTimeout(() => {
      setDisplayedText(prev => prev + text[index]);
      setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (index === text.length) {
      // Pause before starting to erase
      const timeout = setTimeout(() => {
      setIndex(prev => prev + 1); // Move to erasing phase
      }, delay);
      return () => clearTimeout(timeout);
    } else if (displayedText.length > 0) {
      // Erasing: remove one character at a time
      const timeout = setTimeout(() => {
      setDisplayedText(prev => prev.slice(0, -1));
      setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Reset for next typing cycle
      setIndex(0);
    }
  }, [index, text, speed, delay]); // Re-run effect when these values change

  return (
    <h2 className="text-lg text-center sm:text-xl font-semibold tracking-tighter md:text-1xl md:leading-[2.5rem] text-[#0e2944]">
      {displayedText}
      <span className="inline-block w-[2px] bg-white ml-1 animate-pulse"></span>
    </h2>
  );
}
