import { useState } from 'react';

const useTimer = (deadline) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline));

  setTimeout(() => {
    setTimeLeft(calculateTimeLeft(deadline));
  }, 1000);

  return timeLeft;
}

const calculateTimeLeft = (deadline) => {
  let difference = +new Date(deadline) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      hours: pad(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: pad(Math.floor((difference / 1000 / 60) % 60)),
      seconds: pad(Math.floor((difference / 1000) % 60))
    };


  }

  return timeLeft;
}

const pad = (d) => {
  return (d < 10) ? '0' + d.toString() : d.toString();
}

export default useTimer;