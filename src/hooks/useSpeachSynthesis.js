import { useState, useRef } from 'react';

const useSpeechSynthesis = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechSynthesisRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);

  // Start speaking the text
  const speak = (text, language = 'en-US') => {
    if (!text) return;
    if (isSpeaking) stop();

    utteranceRef.current = new SpeechSynthesisUtterance(text);
    utteranceRef.current.lang = language;
    setIsSpeaking(true);

    utteranceRef.current.onend = () => {
      setIsSpeaking(false);
    };

    speechSynthesisRef.current.speak(utteranceRef.current);
  };

  // Pause speech
  const pause = () => {
    if (speechSynthesisRef.current.speaking) {
      speechSynthesisRef.current.pause();
      setIsSpeaking(false);
    }
  };

  // Resume speech
  const resume = () => {
    if (speechSynthesisRef.current.paused) {
      speechSynthesisRef.current.resume();
      setIsSpeaking(true);
    }
  };

  // Stop speech
  const stop = () => {
    if (speechSynthesisRef.current.speaking) {
      speechSynthesisRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  return { isSpeaking, speak, pause, resume, stop };
};

export default useSpeechSynthesis;
