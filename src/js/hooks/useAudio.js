import { useState, useEffect } from "react";

const useAudio = props => {
  const { isPlaying, url } = props;
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(isPlaying);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  // useEffect(() => {
  //   audio.addEventListener('ended', () => setPlaying(false));
  //   return () => {
  //     audio.removeEventListener('ended', () => setPlaying(false));
  //   };
  // }, []);

  return [playing, toggle];
};

export default useAudio;