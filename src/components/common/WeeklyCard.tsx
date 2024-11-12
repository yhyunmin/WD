import { Calendar, MapPinned, SunMedium } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import WeeklyItems, { WeeklyPropsType } from './Weekly/WeeklyItems';

const TEXT = {
  title: '7 Days',
  desc: '이번주 날씨를 조회하고 있습니다.',
};
const weeklyData: WeeklyPropsType[] = [
  {
    date: '03 Nov',
    day: '일요일',
    maxTemp: 22,
    minTemp: 14,
    condition: 'cloudy',
  },
  {
    date: '04 Nov',
    day: '월요일',
    maxTemp: 17,
    minTemp: 9,
    condition: 'cloudy',
  },
  {
    date: '05 Nov',
    day: '화요일',
    maxTemp: 13,
    minTemp: 8,
    condition: 'sunny',
  },
  {
    date: '06 Nov',
    day: '수요일',
    maxTemp: 10,
    minTemp: 6,
    condition: 'sunny',
  },
  {
    date: '07 Nov',
    day: '목요일',
    maxTemp: 11,
    minTemp: 4,
    condition: 'sunny',
  },
  {
    date: '08 Nov',
    day: '금요일',
    maxTemp: 13,
    minTemp: 6,
    condition: 'sunny',
  },
  {
    date: '09 Nov',
    day: '토요일',
    maxTemp: 15,
    minTemp: 9,
    condition: 'sunny',
  },
];

const WeeklyCard = () => {
  return (
    <Card className='h-full flex flex-col gap-2 min-w-[268px] bg-white border-zinc-300 px-6 py-6'>
      <CardTitle className='font-bold text-2xl tracking-tighter'>
        {TEXT.title}
      </CardTitle>
      <CardDescription>
        <p className='text-zinc-600 tracking-tight '>{TEXT.desc}</p>
      </CardDescription>
      <CardContent className='flex flex-col justify-between h-full py-8'>
        {weeklyData.map(v => {
          return (
            <WeeklyItems
              date={v.date}
              day={v.day}
              maxTemp={v.maxTemp}
              minTemp={v.minTemp}
              condition={v.condition}
            />
          );
        })}
      </CardContent>
    </Card>
  );
};

export default WeeklyCard;
