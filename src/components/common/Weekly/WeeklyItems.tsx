import { SunMedium } from 'lucide-react';
import Rain from '../TodayHighlight/Icon/rain.svg?react';
import Sunny from '../TodayHighlight/Icon/sunny.svg?react';
export type WeeklyPropsType = {
  date: string;
  day: string;
  maxTemp: number;
  minTemp: number;
  condition: 'sunny' | 'cloudy';
};
const WeeklyItems = ({
  date,
  day,
  maxTemp,
  minTemp,
  condition,
}: WeeklyPropsType) => {
  return (
    <>
      <div className='flex gap-2 items-center border-b border-b-zinc-200 py-2'>
        {condition === 'sunny' ? (
          <Sunny size={36} color='#f37349' />
        ) : (
          <Rain size={36} />
        )}
        <div className='flex gap-4 items-center w-full'>
          <div className='flex flex-1 w-full gap-1'>
            <div className='flex items-start justify-end w-full gap-0.5'>
              <p className='text-2xl font-bold text-right tracking-tighter text-rose-600'>
                {maxTemp}
              </p>
              <span className='text-sm font-medium tracking-tighter'>°C</span>
            </div>
            <div className='flex items-start justify-end w-full gap-0.5'>
              <p className='text-2xl font-bold tracking-tighter text-sky-600'>
                {minTemp}
              </p>
              <span className='text-sm font-medium tracking-tighter'>°C</span>
            </div>
          </div>
          <div className='flex justify-between flex-1'>
            <p>{date}</p>
            <p>{day}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklyItems;
