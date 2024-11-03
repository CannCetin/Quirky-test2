'use client';
import { useState, useEffect } from 'react';

const TextRotator = () => {
  const [text, setText] = useState('');
  const words = ["Yaratıcı.", "Modern.", "Etkili.", "Eşsiz."];
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[index];

    const tick = () => {
      if (!isDeleting && text === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(() => {
          setText(prev => {
            if (isDeleting) {
              return prev.slice(0, -1);
            }
            return currentWord.slice(0, prev.length + 1);
          });
        }, isDeleting ? 100 : 200);
      }
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <span style={{ borderRight: '0.08em solid #666' }}>
      {text}
    </span>
  );
};

export default TextRotator;