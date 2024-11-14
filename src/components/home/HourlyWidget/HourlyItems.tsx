// import { MoonStar } from 'lucide-react';
import MoonStar from '@/assets/images/1000n.svg?react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ko'; // 한국어 로케일을 설정하기 위한 import
import { hourlyData } from '@/types';

dayjs.extend(localizedFormat);
dayjs.locale('ko');

const HourlyContents = ({ item }: { item: hourlyData }) => {
  // 하드코딩 온도 영역
  // const numbers = [15, 16, 17, 18, 19, 20, 21];
  // const getRandomNumber = (numbers: number[]) => {
  //   const random = Math.floor(Math.random() * numbers.length);
  //   return numbers[random];
  // };

  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 p-2 px-5">
      <p className="text-nowrap font-medium text-sm">{dayjs(item.time).format('A h시')}</p>
      <MoonStar width={48} height={48} />
      <div className="flex gap-0.5">
        <p className="font-bold text-xl tracking-tighter">{item.temp_c}</p>
        <span className="font-medium text-sm tracking-tighter">°C</span>
      </div>
    </div>
  );
};

export default HourlyContents;
