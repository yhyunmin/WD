// import { MoonStar } from 'lucide-react';
import MoonStar from '@/assets/images/1000n.svg?react';
const HourlyContents = ({ i }: { i: number }) => {
  // 하드코딩 온도 영역
  const numbers = [15, 16, 17, 18, 19, 20, 21];
  const getRandomNumber = (numbers: number[]) => {
    const random = Math.floor(Math.random() * numbers.length);
    return numbers[random];
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 p-2 px-5">
      <p className="text-nowrap font-medium text-sm">
        {i < 12 ? '오전' : '오후'} {i} 시
      </p>
      <MoonStar width={48} height={48} />
      <div className="flex gap-0.5">
        <p className="font-bold text-xl tracking-tighter">{getRandomNumber(numbers)}</p>
        <span className="font-medium text-sm tracking-tighter">°C</span>
      </div>
    </div>
  );
};

export default HourlyContents;
