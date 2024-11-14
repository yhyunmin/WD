import WidgetTitle from '@/components/common/WidgetTitle';
import HourlyContents from '@/components/home/HourlyWidget/HourlyItems';
import { Card, CardContent } from '@/components/ui/card';
import { ForecastDay, Weather, hourlyData } from '@/types';

export const T = {
  title: 'Hourly',
  desc: '오늘의 시간대별 날씨를 조회하고 있습니다.',
} as const;

const HourlyCard = ({ data }: { data: ForecastDay }) => {
  console.log(data, 'data');
  return (
    <>
      <Card className="flex h-full min-w-[268px] flex-col gap-7 border-zinc-300 bg-white px-6 py-6">
        <WidgetTitle title={T.title} desc={T.desc} />
        <CardContent className="scrollbar-hidden shade relative flex gap-4 overflow-x-scroll p-0">
          {data &&
            data.hour.map((item) => {
              return <HourlyContents item={item} />;
            })}
        </CardContent>
      </Card>
    </>
  );
};

export default HourlyCard;
