// app/components/AnimatedHeadline.tsx
import React, { useState } from "react";

type Props = {
  words: string[];
  className?: string;
  delayPerLetterMs?: number;
  delayBetweenWordsMs?: number;
};

export default function AnimatedHeadline({
  words,
  className = "",
  delayPerLetterMs = 55,
  delayBetweenWordsMs = 220,
}: Props) {
  // bumping this key remounts the <h1>, restarting animations
  const [animKey, setAnimKey] = useState(0);

  return (
    <h1
      key={animKey}
      className={`headline ${className}`}
      onMouseEnter={() => setAnimKey((k) => k + 1)}
      title="Hover to replay"
    >
      {words.map((word, wIdx) => {
        const letters = Array.from(word);
        const baseDelay = wIdx * delayBetweenWordsMs;
        return (
          <span key={wIdx} className={`headline__word word-${wIdx + 1}`}>
            {letters.map((ch, i) => (
              <span
                key={i}
                className="headline__letter"
                style={{ animationDelay: `${baseDelay + i * delayPerLetterMs}ms` }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </span>
        );
      })}
    </h1>
  );
}
