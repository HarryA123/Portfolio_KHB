import React, { useEffect, useRef } from 'react';

import { Text, TextProps } from '@chakra-ui/react';

interface ScrambleTextProps extends TextProps {
  phrases: string[];
  infinity?: boolean;
  repeatDelay?: number;
  delay?: number;
}

const ScrambleText = ({
  phrases = ['default text'],
  infinity = false,
  repeatDelay = 5000,
  delay = 0,
  ...basisProps
}: ScrambleTextProps) => {
  const textRef = useRef<any>(null);
  let resolveRef: any;
  let frame: any;
  let frameRequest: any;
  let queue: any;

  const chars = '!<>-_\\/[]{}—=+*^?#________';

  const setText = (newText: any) => {
    const oldText = textRef.current.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (resolveRef = resolve));
    queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end, char: '' });
    }
    cancelAnimationFrame(frameRequest);
    frame = 0;
    update();
    return promise;
  };

  const update = () => {
    let output = '';
    let complete = 0;
    for (let i = 0, n = queue.length; i < n; i++) {
      let { from, to, start, end, char } = queue[i];
      if (frame >= end) {
        complete++;
        output += to;
      } else if (frame >= start) {
        if (!char || Math.random() < 0.28) {
          const char = randomChar();
          queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    textRef.current.innerHTML = output;
    if (complete === queue.length) {
      resolveRef();
    } else {
      frameRequest = requestAnimationFrame(update);
      frame++;
    }
  };

  const randomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)];
  };

  useEffect(() => {
    let counter = 0;
    const next = () => {
      if (!infinity) {
        if (counter < phrases.length) {
          setText(phrases[counter]).then(() => {
            setTimeout(next, delay);
          });
          counter = counter + 1;
        }
      } else {
        setText(phrases[counter]).then(() => {
          setTimeout(next, delay);
        });
        counter = (counter + 1) % phrases.length;
      }
    };

    if (textRef && textRef.current) {
      if (delay) {
        setTimeout(next, delay);
      } else {
        next();
      }
    }
  }, [textRef]);
  return <Text {...basisProps} ref={textRef} />;
};

export default ScrambleText;
