import Temp from '../TodayHighlight/Icon/temp.svg?react';
import Water from '../TodayHighlight/Icon/water.svg?react';
import Wind from '../TodayHighlight/Icon/wind.svg?react';
import Cloud from '../TodayHighlight/Icon/visibility.svg?react';

const TodayOption = ({
  title,
  engTitle,
  value,
  symbol,
  icon,
}: {
  title: string;
  engTitle: string;
  value: number;
  symbol: string;
  icon: string;
}) => {
  return (
    <>
      <div className='border border-zinc-200 bg-zinc-50 col-span-1 p-4 rounded-lg flex flex-col gap-4'>
        <div className='flex items-center gap-1 '>
          <h3 className='text-base font-bold tracking-tighter'>{title}</h3>
          <span className='text-zinc-600 text-sm'>{engTitle}</span>
        </div>
        <div className='flex gap-7'>
          <div className='flex w-full justify-between'>
            <div className='rounded-full w-auto h-auto'>
              {icon === 'rain' ? (
                <Water width={48} height={48} />
              ) : icon === 'wind' ? (
                <Wind width={48} height={48} />
              ) : icon === 'temp' ? (
                <Temp width={48} height={48} />
              ) : icon === 'cloud' ? (
                <Cloud width={48} height={48} />
              ) : null}
            </div>
            <div className='flex gap-1 items-end justify-end'>
              <h3 className='text-zinc-800 font-bold text-3xl tracking-tighter text-right'>
                {value}
              </h3>
              <span className='text-xl font-bold'>{symbol}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayOption;
