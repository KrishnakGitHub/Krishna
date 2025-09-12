"use client";
import React from 'react'
import { useTypingEffect } from '../hooks/useTypingEffect';

interface TypingProps {
    words: string[];
}

export default function Typing({words}: TypingProps) {
    const text = useTypingEffect(words);
    return (
    <div className="text-orange-500" aria-live='polite'>
        {text}
        <span className="animate-pulse ml-1" aria-hidden="true">|</span>
    </div>
)
}
