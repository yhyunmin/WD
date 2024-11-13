import Cloudy from '@/assets/images/1030d.svg?react';
import Sunny from '@/assets/images/1000d.svg?react';

export type WeeklyPropsType = {
  date: string;
  day: string;
  maxTemp: number;
  minTemp: number;
  condition: 'sunny' | 'cloudy';
};
const WeeklyItems = ({ date, day, maxTemp, minTemp, condition }: WeeklyPropsType) => {
  return (
    <>
      <div className="flex items-center gap-2 border-b border-b-zinc-200 pb-1">
        {condition === 'sunny' ? <Sunny width={40} height={40} color="#f37349" /> : <Cloudy width={40} height={40} />}
        <div className="flex w-full items-center gap-4">
          <div className="flex w-full flex-1 gap-1">
            <div className="flex w-full items-start justify-end gap-0.5">
              <p className="text-right font-bold text-xl tracking-tighter text-rose-600">{maxTemp}</p>
              <span className="font-medium text-sm tracking-tighter">°C</span>
            </div>
            <div className="flex w-full items-start justify-end gap-0.5">
              <p className="font-bold text-xl tracking-tighter text-sky-600">{minTemp}</p>
              <span className="font-medium text-sm tracking-tighter">°C</span>
            </div>
          </div>
          <div className="flex flex-1 justify-between font-medium">
            <p>{date}</p>
            <p>{day}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklyItems;
