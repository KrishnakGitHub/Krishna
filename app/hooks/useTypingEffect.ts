"use client";
import { useEffect, useRef, useState } from 'react';

export function useTypingEffect(
    words: string[],
    speed = 100,
    delay = 1000,
    isPaused = false) {
    const [index, setIndex] = useState<number>(0);
    const [subIndex, setSubIndex] = useState<number>(0);
    const [reverse, setReverse] = useState<boolean>(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
    if (isPaused || words.length === 0) return;

    // stop old timeouts before setting a new one
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Finished typing → wait then start deleting
    if (!reverse && subIndex === words[index].length) {
      timeoutRef.current = setTimeout(() => setReverse(true), delay);
      return;
    }

    // Finished deleting → move to next word
    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Continue typing or deleting
    timeoutRef.current = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [subIndex, index, reverse, words, speed, delay, isPaused]);

    
    return words[index]?.substring(0, subIndex) ?? "";
}
