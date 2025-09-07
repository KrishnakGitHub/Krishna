"use client";
import React from 'react'
import { useTypingEffect } from '../hooks/useTypingEffect';

interface TypingProps {
    words: string[];
}

export default function Typing({words}: TypingProps) {
    const text = useTypingEffect(words);
    return (
    <div>
        {text}
        <span className="border-r-2 border-white animate-pulse ml-1">|</span>
    </div>
)
}
