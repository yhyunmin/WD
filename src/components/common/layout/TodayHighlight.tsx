import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';

import Moon from '../TodayHighlight/Icon/moon.svg?react';
import Sunny from '../TodayHighlight/Icon/sunny.svg?react';

import TodayOption from '../TodayHighlight/TodayOption';
import TodayOptions2 from '../TodayHighlight/TodayOptions2';
const TodayHighlight = () => {
  return (
    <Card className=' h-full flex-col min-w-[268px] bg-white border-zinc-300 px-6 py-6 flex gap-7'>
      <CardHeader className='p-0'>
        <CardTitle className='font-bold text-2xl tracking-tighter'>
          Today's Highlights
        </CardTitle>
        <CardDescription>
          <p className='text-zinc-600 tracking-tight'>
            오늘 날씨 중 주의깊게 살펴보아야할 이벤트를 조회하고 있습니다.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className='grid grid-cols-4 gap-6'>
        <TodayOptions2 first={'05:48am'} second={'11:56am'} third={'18:14pm'} />
        <div className='border border-zinc-200 bg-zinc-50 col-span-2 p-6 rounded-lg flex flex-col gap-4'>
          <div className='flex items-center gap-1 '>
            <h3 className='text-base font-bold tracking-tighter'>일출/일몰</h3>
            <span className='text-zinc-600 text-sm'>Sunrise & Sunset</span>
          </div>
          <div className='flex gap-7 justify-start'>
            <div className='flex w-full  items-center justify-start gap-4'>
              <div className='rounded-full w-auto h-auto'>
                <Sunny width={48} height={48} />
              </div>
              <div className='flex flex-col gap-0.5 justify-center'>
                <p className='text-zinc-400  font-medium '>Sunrise</p>
                <h3 className='text-zinc-800 font-bold text-2xl tracking-tighter'>
                  07:00AM
                </h3>
              </div>
            </div>
            <div className='flex w-full  items-center justify-end gap-4'>
              <div className='rounded-full w-auto h-auto'>
                <Moon width={48} height={48} />
              </div>
              <div className='flex flex-col gap-0.5 justify-center'>
                <p className='text-zinc-400  font-medium '>Sunset</p>
                <h3 className='text-zinc-800 font-bold text-2xl tracking-tighter'>
                  05:34AM
                </h3>
              </div>
            </div>
          </div>
        </div>
        <TodayOption
          title='습도'
          engTitle='Humidity'
          value={64}
          symbol='%'
          icon='rain'
        />
        <TodayOption
          title='기압'
          engTitle='Pressure'
          value={1024}
          symbol='hPa'
          icon='wind'
        />
        <TodayOption
          title='가시거리'
          engTitle='Visibility'
          value={10}
          symbol='km'
          icon='cloud'
        />
        <TodayOption
          title='체감 온도'
          engTitle='Feels like'
          value={19}
          symbol='°C'
          icon='temp'
        />
      </CardContent>
    </Card>
  );
};

export default TodayHighlight;
