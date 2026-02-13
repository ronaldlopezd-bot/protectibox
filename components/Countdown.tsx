
import React, { useState, useEffect } from 'react';
import { TARGET_DATE } from '../constants';
import { TimeLeft } from '../types';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(TARGET_DATE) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const Unit = ({ value, label, color = "text-white" }: { value: number, label: string, color?: string }) => (
    <div className="flex flex-col items-center group transition-transform hover:scale-105">
      <div className={`text-4xl md:text-7xl font-black tracking-tighter ${color} mb-1 drop-shadow-sm`}>
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-slate-500 font-bold group-hover:text-cyan-400 transition-colors">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center gap-6 md:gap-16 py-12">
      <Unit value={timeLeft.days} label="Días" />
      <Unit value={timeLeft.hours} label="Horas" color="text-blue-500" />
      <Unit value={timeLeft.minutes} label="Minutos" />
      <Unit value={timeLeft.seconds} label="Segundos" color="text-cyan-400" />
    </div>
  );
};

export default Countdown;
