import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Stat from './Stat';
import {
  differenceInDays,
  differenceInMinutes,
  differenceInHours,
  differenceInSeconds,
} from 'date-fns';

// Import the fonts
import '@fontsource/dancing-script';
import '@fontsource/roboto';

const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem; /* Reduced gap for smaller screens */
  }
`;

interface IRemainingTime {
  date: Date;
}

type RemainingTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function RemainingTime({ date }: IRemainingTime) {
  const [remainingTime, setRemainingTime] = useState<RemainingTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateRemainingTime = () => {
    const currentTime = new Date();
    const days = differenceInDays(date, currentTime);
    const hours = differenceInHours(date, currentTime) % 24;
    const minutes = differenceInMinutes(date, currentTime) % 60;
    const seconds = differenceInSeconds(date, currentTime) % 60;
    setRemainingTime({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    calculateRemainingTime();
    const intervalId = setInterval(() => {
      calculateRemainingTime();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <StatContainer>
      <Stat value={remainingTime.days.toString()} label="Días" />
      <Stat value={remainingTime.hours.toString()} label="Horas" />
      <Stat value={remainingTime.minutes.toString()} label="Minutos" />
      <Stat value={remainingTime.seconds.toString()} label="Segundos" />
    </StatContainer>
  );
}
