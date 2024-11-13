import Wave from '@/assets/images/Waves.svg?react';
import ItemTitle from '@/components/common/ItemTitle';
import { T } from '@/components/home/HighlightWidget';
import Tide from '@/components/home/HighlightWidget/HightlightItems2/Tide';

const TodayOptions2 = ({ first, second, third, fourth }: { first: string; second: string; third: string; fourth: string }) => {
  return (
    <>
      <div className="col-span-2 flex flex-col gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
        <ItemTitle title={T.item1.title} desc={T.item1.desc} />
        <div className="flex items-center gap-4">
          <div className="h-auto w-auto rounded-full">
            <Wave width={64} height={64} />
          </div>
          <div className="flex w-full items-center justify-between gap-2">
            <Tide time={first} title={'1회 - 만조'} />
            <Tide time={second} title={'2회 - 간조'} />
            <Tide time={third} title={'3회 - 만조'} />
            <Tide time={fourth} title={'4회 - 간조'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayOptions2;
