import { Howl } from 'howler';
import { useEffect } from 'react';

export const useNotificationSound = (file = 'SE200947.mp3', loop = false) => {
  const sound = new Howl({
    src: [`/musics/${file}`],
    volume: 1.0,
    loop,
  });

  const playSound = () => {
    sound.play();
  };
  const stopSound = () => {
    sound.stop();
  };
  useEffect(() => {
    return () => {
      sound.unload();
    };
  }, []);

  return { playSound, stopSound };
};
