import { useState } from 'react';

const useTimer = (deadline) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline));

  setTimeout(() => {
    setTimeLeft(calculateTimeLeft(deadline));
  }, 1000);

  return timeLeft;
}

const calculateTimeLeft = (deadline) => {
  if (!deadline) {
    return {}
  }

  const difference = +new Date(deadline) - +new Date();

  if (difference <= 0) {
    return {
      hours: pad(0),
      minutes: pad(0),
      seconds: pad(0),
      isTimesUp: true
    };
  }

  return {
    hours: pad(Math.floor((difference / (1000 * 60 * 60)) % 24)),
    minutes: pad(Math.floor((difference / 1000 / 60) % 60)),
    seconds: pad(Math.floor((difference / 1000) % 60)),
    isTimesUp: false
  };
}

const pad = (d) => {
  return (d < 10) ? '0' + d.toString() : d.toString();
}

export default useTimer;