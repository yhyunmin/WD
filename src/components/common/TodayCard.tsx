import { Calendar, MapPinned, SunMedium } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';

const TEXT = {
  title: 'Today',
  desc: '오늘 현재 날씨를 조회하고 있습니다.',
  date: '2024-11-03',
  location: 'Seoul',
  country: 'South Korea',
};

const TodayCard = () => {
  return (
    <Card className=' h-full flex flex-col min-w-[268px] gap-2 bg-white border-zinc-300 px-6 py-6'>
      <CardTitle className='font-bold text-2xl tracking-tighter'>
        {TEXT.title}
      </CardTitle>
      <CardDescription>
        <p className='text-zinc-600 tracking-tight '>{TEXT.desc}</p>
      </CardDescription>
      <CardContent>
        <div className='font-bold text-5xl flex gap-1 items-start border-b px-2 pb-4 my-2 '>
          <SunMedium size={64} color='#f37349' />
          <p className='font-black tracking-tighter'>19</p>
          <span className='text-2xl tracking-tighter'>°C</span>
        </div>
        <p className='flex gap-2 font-medium'>
          <Calendar />
          {TEXT.date}
        </p>
        <p className='flex gap-2 font-medium text-nowrap'>
          <MapPinned />
          {TEXT.location}-{TEXT.country}
        </p>
      </CardContent>
    </Card>
  );
};

export default TodayCard;
