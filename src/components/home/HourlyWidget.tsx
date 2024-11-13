import WidgetTitle from '@/components/common/WidgetTitle';
import HourlyContents from '@/components/home/HourlyWidget/HourlyItems';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const T = {
  title: 'Hourly',
  desc: '오늘의 시간대별 날씨를 조회하고 있습니다.',
} as const;

const HourlyCard = () => {
  return (
    <>
      <Card className="flex h-full min-w-[268px] flex-col gap-7 border-zinc-300 bg-white px-6 py-6">
        <WidgetTitle title={T.title} desc={T.desc} />
        <CardContent className="scrollbar-hidden shade relative flex gap-4 overflow-x-scroll p-0">
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
