import { Button } from "antd";
import { useRef, useState } from "react";
import { FaMusic, FaPlay } from "react-icons/fa";
import {music} from "../constants/portada";
import { useTheme } from "styled-components";


export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const theme = useTheme();

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio && !started) {
      audio.play().then(() => {
        setStarted(true);
      }).catch((e) => {
        console.log("Playback failed:", e);
      });
    }
  };

  return (
    <>
      {!started && (
        <Button onClick={handlePlay} type='primary' icon={<FaPlay />} style={{
    backgroundColor: theme.colors.primary ,
    borderColor: "none",
    color: theme.colors.secondary
  }}>
          
        </Button>
      )}
      <audio ref={audioRef} src={music} loop />
    </>
  );
}