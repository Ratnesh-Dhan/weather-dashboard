// https://pixabay.com/sound-effects/search/tick/
// https://mp3cut.net/

import { useRef, useEffect } from "react";

const useAudio = (file) => {
  const audioRef = useRef(new Audio(file));

  useEffect(() => {
    audioRef.current.load();
  }, [file]);

  const tick = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch((err) => {
      console.error("Error at tick sound effect", err);
    });
  };

  return tick;
};
export default useAudio;
