import React, { useState, useEffect } from "react";

export function TypingEffect({ 
  text = "Typing Effect", 
  speed = 100, // Time per letter in milliseconds
  delay = 1000 // Pause before restarting the typing
}) {

  const [displayedText, setDisplayedText] = useState(""); // Currently visible text
  const [index, setIndex] = useState(0); // Current position in the string

  useEffect(() => {
    if (index < text.length) {
      // Add next character after `speed` ms
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout); // Cleanup previous timeout
    } else {
      // Reset text after reaching the end, pause for `delay` ms
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, delay);
      return () => clearTimeout(timeout); // Cleanup
    }
  }, [index, text, speed, delay]); // Re-run effect when these values change

  return (
    <h2 className="text-lg text-center sm:text-1xl font-normal tracking-tighter md:text-2xl md:leading-[2.5rem] text-white italic">
      {displayedText}
      <span className="inline-block w-[2px] bg-white ml-1 animate-pulse"></span>
    </h2>
  );
}
