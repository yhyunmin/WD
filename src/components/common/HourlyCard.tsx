import { MoonStar } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import HourlyContents from './Hourly/HourlyContents';

export const TIMESTAMP = {
  title: 'Hourly',
  desc: '오늘의 시간대별 날씨를 조회하고 있습니다.',
} as const;

const HourlyCard = () => {
  return (
    <>
      <Card className='h-full flex-col min-w-[268px] bg-white border-zinc-300 px-6 py-6 flex gap-7'>
        <CardHeader className='p-0'>
          <CardTitle className='font-bold text-2xl tracking-tighter'>
            {TIMESTAMP.title}
          </CardTitle>
          <CardDescription>
            <p className='text-zinc-600 tracking-tight'>{TIMESTAMP.desc}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className='flex gap-4 p-0 overflow-x-scroll scrollbar-hidden relative shade'>
          {Array(24)
            .fill(0)
            .map((_, i) => (
              <HourlyContents i={i} />
            ))}
        </CardContent>
      </Card>
    </>
  );
};

export default HourlyCard;
