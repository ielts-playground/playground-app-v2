import { TimeDisplay } from './type';

export const formatTime = (time: number) => {
  let timeDisplay: TimeDisplay = {
    minutes: '00',
    minutesAndSeconds: '00:00',
  };
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const minutesDisplay = minutes < 9 ? `0${minutes + 1}` : `${minutes + 1}`;

    timeDisplay = {
      minutes: minutesDisplay,
      minutesAndSeconds: `${formatMinutes}:${formatSeconds}`,
    };

    return timeDisplay;
  }
  return timeDisplay;
};
