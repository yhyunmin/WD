import Moon from '@/assets/images/1000n.svg?react';
import Sunny from '@/assets/images/1000d.svg?react';
import TodayOption from '@/components/home/HighlightWidget/HighlightItems';
import TodayOptions2 from '@/components/home/HighlightWidget/HighlightItems2';
import { Card, CardContent } from '@/components/ui/card';
import ItemTitle from '@/components/common/ItemTitle';
import WidgetTitle from '@/components/common/WidgetTitle';
import { ForecastDay } from '@/types';

export const T = {
  title: "Today's Highlights",
  desc: '오늘 날씨 중 주의깊게 살펴보아야할 이벤트를 조회하고 있습니다.',
  item1: {
    title: '해양 및 조수 데이터',
    desc: 'Marine and Sailing',
  },
  item2: {
    title: '일출 및 일몰',
    desc: 'Sunrise and Sunset',
  },
} as const;

const TodayHighlight = ({ data, tide }: { data: ForecastDay; tide: any }) => {
  return (
    <Card className="flex h-full min-w-[268px] flex-col gap-7 border-zinc-300 bg-white px-6 py-6">
      <WidgetTitle title={T.title} desc={T.desc} />
      <CardContent className="grid grid-cols-4 gap-6 p-0">
        <TodayOptions2 first={'05:48am'} second={'11:56am'} third={'18:14pm'} fourth={'23:22pm'} data={tide.day.tides[0].tide} />
        <div className="col-span-2 flex flex-col gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
          <ItemTitle title={T.item2.title} desc={T.item2.desc} />
          <div className="flex justify-start gap-7">
            <div className="flex w-full items-center justify-start gap-4">
              <div className="h-auto w-auto rounded-full">
                <Sunny width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center gap-0.5">
                <p className="font-medium text-zinc-400">Sunrise</p>
                {data && <h3 className="font-bold text-2xl tracking-tighter text-zinc-800">{data.astro.sunrise}</h3>}
              </div>
            </div>
            <div className="flex w-full items-center justify-end gap-4">
              <div className="h-auto w-auto rounded-full">
                <Moon width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center gap-0.5">
                <p className="font-medium text-zinc-400">Sunset</p>
                {data && <h3 className="font-bold text-2xl tracking-tighter text-zinc-800">{data.astro.sunset}</h3>}
              </div>
            </div>
          </div>
        </div>
        <TodayOption title="습도" engTitle="Humidity" value={64} symbol="%" icon="rain" />
        <TodayOption title="기압" engTitle="Pressure" value={1024} symbol="hPa" icon="wind" />
        <TodayOption title="가시거리" engTitle="Visibility" value={10} symbol="km" icon="cloud" />
        <TodayOption title="체감 온도" engTitle="Feels like" value={19} symbol="°C" icon="temp" />
      </CardContent>
    </Card>
  );
};

export default TodayHighlight;
