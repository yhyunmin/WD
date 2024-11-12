import { MoonStar } from 'lucide-react';

const HourlyContents = ({ i }: { i: number }) => {
  const numbers = [15, 16, 17, 18, 19, 20, 21];

  const getRandomNumber = (numbers: number[]) => {
    const random = Math.floor(Math.random() * numbers.length);
    return numbers[random];
  };
  return (
    <div className='rounded-md border border-zinc-200 bg-zinc-50 flex flex-col gap-1 items-center justify-center p-2 px-5 '>
      <p className='font-medium text-sm text-nowrap'>
        {i < 12 ? '오전' : '오후'} {i} 시
      </p>
      <MoonStar size={48} strokeWidth={1.5} color='#e6c46d' />
      <div className='flex gap-0.5'>
        <p className='font-bold tracking-tighter text-xl'>
          {getRandomNumber(numbers)}
        </p>
        <span className='text-sm tracking-tighter font-medium'>°C</span>
      </div>
    </div>
  );
};

export default HourlyContents;
