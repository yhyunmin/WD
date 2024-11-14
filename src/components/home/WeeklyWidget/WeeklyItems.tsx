import I1000 from '@/assets/images/1000d.svg?react';
import I1009 from '@/assets/images/1030d.svg?react';
import I1063 from '@/assets/images/1063d.svg?react';
import dayjs from 'dayjs';

export type WeeklyPropsType = {
  date: string;
  maxTemp: number;
  minTemp: number;
  condition: number;
};
const WeeklyItems = ({ date, maxTemp, minTemp, condition }: WeeklyPropsType) => {
  const day = dayjs(date).format('dddd');
  console.log(condition, 'condition');
  return (
    <>
      <div className="flex items-center gap-2 border-b border-b-zinc-200 pb-1">
        {condition === 1009 ? (
          <I1009 width={36} height={36} />
        ) : condition === 1000 ? (
          <I1000 width={36} height={36} />
        ) : condition === 1063 ? (
          <I1063 width={36} height={36} />
        ) : (
          <I1000 width={36} height={36} />
        )}
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
