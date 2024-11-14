import WidgetTitle from '@/components/common/WidgetTitle';
import WeeklyItems from '@/components/home/WeeklyWidget/WeeklyItems';
import { Card, CardContent } from '@/components/ui/card';

const T = {
  title: '7 Days',
  desc: '이번주 날씨를 조회하고 있습니다.',
};

const WeeklyCard = ({ data }: { data: any }) => {
  console.log(data, 'data');
  return (
    <Card className="flex h-full min-w-[268px] flex-col gap-2 border-zinc-300 bg-white px-6 py-6">
      <WidgetTitle title={T.title} desc={T.desc} />
      <CardContent className="flex flex-col justify-between px-0 py-5">
        {data &&
          data.forecastday.map((v: any) => {
            return (
              <WeeklyItems
                date={v.date}
                maxTemp={v.day.maxtemp_c}
                minTemp={v.day.mintemp_c}
                condition={v.day.condition.code}
                key={v.date}
              />
            );
          })}
      </CardContent>
    </Card>
  );
};

export default WeeklyCard;
