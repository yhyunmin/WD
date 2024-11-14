import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPinned } from 'lucide-react';
import Day from '@/assets/images/1000d.svg?react';
import Night from '@/assets/images/1000n.svg?react';
import WidgetTitle from '@/components/common/WidgetTitle';
import { Weather } from '@/types';
import dayjs from 'dayjs';

const T = {
  title: 'Today',
  desc: '오늘 현재 날씨를 조회하고 있습니다.',
  date: '2024-11-03',
  location: 'Seoul',
  country: 'South Korea',
};
const TodayWidget = ({ data }: { data: Weather }) => {
  const month = dayjs(data.location.localtime).format('YYYY-MM-DD');
  return (
    <Card className="flex h-full min-w-[268px] flex-col gap-2 border-zinc-300 bg-white px-6 py-6">
      <WidgetTitle title={T.title} desc={T.desc} />
      <CardContent className="p-0">
        <div className="my-2 flex items-center gap-3 border-b px-2 pb-4 font-bold text-5xl">
          {Number(dayjs(data.location.localtime).format('HH')) < 12 ? <Night width={64} height={64} /> : <Day width={64} height={64} />}
          <div className="flex items-start">
            <p className="font-black tracking-tighter">{data.current.temp_c}</p>
            <span className="text-2xl tracking-tighter">°C</span>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <p className="f flex gap-2">
            <Calendar />
            {month}
          </p>
          <p className="flex gap-2 text-nowrap font-normal">
            <MapPinned />
            {data.location.name}-{data.location.country}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodayWidget;
