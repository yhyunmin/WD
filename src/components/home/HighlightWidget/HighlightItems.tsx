import Wind from '@/assets/images/Wind.svg?react';
import Water from '@/assets/images/Humidity.svg?react';
import Temp from '@/assets/images/Hot.svg?react';
import Cloud from '@/assets/images/Fog.svg?react';
import ItemTitle from '@/components/common/ItemTitle';
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
      <div className="col-span-1 flex flex-col gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4">
        <div className="flex items-center gap-1">
          <ItemTitle title={title} desc={engTitle} />
        </div>
        <div className="flex gap-7">
          <div className="flex w-full justify-between">
            <div className="h-auto w-auto rounded-full">
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
            <div className="flex items-end justify-end gap-1">
              <h3 className="text-right font-bold text-3xl tracking-tighter text-zinc-800">{value}</h3>
              <span className="font-bold text-xl">{symbol}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayOption;
