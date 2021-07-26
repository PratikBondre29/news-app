import React, { useState } from "react";
import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import "./SpeechRecognition.css";

const SpeechRecognition = ({ voiceSearch }) => {
  const [transcript, setTranscript] = useState("");
  const { speak, voices } = useSpeechSynthesis();
  const [isOn, setIsOn] = useState(false);
  const { listen, stop } = useSpeechRecognition({
    onResult: (value) => {
      setTranscript(value);
    },
  });

  const handleToggle = () => {
    setIsOn(!isOn);
    if (isOn) {
      stop();
      voiceSearch(transcript);
    } else {
      speak({ text: "Welcome to sky news", voice: voices[2] });
      setTimeout(() => {
        listen();
        setTranscript("");
      }, 2000);
    }
  };
  console.log(voices[2]);
  return (
    <div className="btn-container">
      <div className="button">
        <div className={`outer circle ${isOn && "listen"}`}>
          <button onClick={handleToggle}>
            {isOn ? (
              <MicOffIcon className="icon" />
            ) : (
              <MicIcon className="icon" />
            )}
          </button>
          <span></span>
          <span></span>
        </div>
      </div>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechRecognition;
