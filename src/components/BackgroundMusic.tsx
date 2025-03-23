import { Button } from "antd";
import { useRef, useState } from "react";
import { FaMusic, FaPlay } from "react-icons/fa";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

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
        <Button onClick={handlePlay} type='primary' icon={<FaPlay />} >
          
        </Button>
      )}
      <audio ref={audioRef} src="./music.mp3" loop />
    </>
  );
}